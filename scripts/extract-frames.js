import { spawn, execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import ffmpeg from '@ffmpeg-installer/ffmpeg';
import ffprobe from '@ffprobe-installer/ffprobe';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const videos = [
  { input: 'public/1080x1080.mp4', poster: 'public/1080x1080-poster.webp', thumb: 'public/1080x1080-thumb.webp' },
  { input: 'public/1920x1080.mp4', poster: 'public/1920x1080-poster.webp', thumb: 'public/1920x1080-thumb.webp' }
];

function getDuration(inputPath) {
  try {
    const cmd = `"${ffprobe.path}" -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${inputPath}"`;
    const duration = execSync(cmd).toString().trim();
    return parseFloat(duration);
  } catch (err) {
    console.error(`Could not get duration for ${inputPath}:`, err.message);
    return 0;
  }
}

async function extractFrame(input, output, time) {
  return new Promise((resolve, reject) => {
    const ffmpegPath = ffmpeg.path;
    const args = ['-ss', time.toString(), '-i', path.join(projectRoot, input), '-frames:v', '1', '-y', path.join(projectRoot, output)];
    
    console.log(`Extracting frame from ${input} at ${time}s to ${output}...`);
    const proc = spawn(ffmpegPath, args);

    proc.on('close', (code) => {
      if (code === 0) {
        console.log(`Successfully created ${output}`);
        resolve();
      } else {
        reject(new Error(`FFmpeg exited with code ${code}`));
      }
    });
  });
}

async function main() {
  for (const video of videos) {
    try {
      const inputPath = path.join(projectRoot, video.input);
      const duration = getDuration(inputPath);
      
      // Extract poster (near start)
      await extractFrame(video.input, video.poster, 0.1);
      
      // Extract thumb (at 50% if possible, else at 1s)
      const thumbTime = duration > 2 ? (duration / 2).toFixed(3) : 1;
      await extractFrame(video.input, video.thumb, thumbTime);
      
    } catch (err) {
      console.error(`Failed to process ${video.input}:`, err.message);
    }
  }
}

main();
