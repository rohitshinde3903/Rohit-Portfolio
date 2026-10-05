import { clsx } from 'clsx';
import { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (ClassValue | string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function openAndDownloadResume(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }

  const resumeUrl = '/resume/Rohit_Shinde-ML.pdf';

  // 1. Open in new browser tab
  window.open(resumeUrl, '_blank', 'noopener,noreferrer');

  // 2. Automatically trigger device download
  const downloadLink = document.createElement('a');
  downloadLink.href = resumeUrl;
  downloadLink.setAttribute('download', 'Rohit_Shinde_Resume.pdf');
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
  