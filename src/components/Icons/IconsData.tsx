import * as React from 'react';

import {
  IconProps,
  IconsInterface,
} from '@/models/interfaces';

/**
 * Optimized SVG icons
 * - Note that some of them have explicit fill colors
 *
 * Icons list:
 *
 * Alert badge
 * Check
 * Close
 * Logo
 * Error badge
 * Eye icon
 * Eye icon off
 * Github icon
 * Google icon
 * Mail
 * Moon
 * Sun
 */
const IconsData: IconsInterface = {
  AlertBadge: (props?: IconProps) => (
    <svg
      fill='none'
      height='24'
      shapeRendering='geometricPrecision'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      width='24'
      role='img'
      aria-label='Alert Badge Icon'
      {...props}
    >
      <path d='M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z' fill='currentColor' />
      <path d='M12 9v4' stroke='currentColor' />
      <path d='M12 17h.01' stroke='currentColor' />
    </svg>
  ),
  Check: (props?: IconProps) => (
    <svg
      stroke='currentColor'
      fill='#fff'
      strokeWidth='0'
      viewBox='0 0 1024 1024'
      height='1em'
      width='1em'
      aria-label='Check Icon'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      {...props}
    >
      <path
        d='M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
      />
    </svg>
  ),
  Close: (props?: IconProps) => (
    <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg' role='img'><path d='M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z' {...props} /></svg>
  ),
  Logo: (props?: IconProps) => (
    <svg
      width='40px'
      height='40px'
      viewBox='0 0 81 80'
      aria-label='Logo Icon'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      {...props}
    >
      <path d='M40.9771 80C63.0687 80 80.9774 62.0914 80.9774 40C80.9773 17.9086 63.0685 -1.38069e-06 40.9769 -8.89459e-07C18.8853 -3.98224e-07 0.976602 17.9086 0.97665 40C0.976698 62.0914 18.8855 80 40.9771 80Z' fill='rgba(0,0,0,0)' />
      <path d='M41.1477 73.9297C59.7223 73.8962 74.6797 58.6603 74.5562 39.8995C74.4327 21.1387 59.275 5.95723 40.7005 5.99078C22.126 6.02432 7.16848 21.2602 7.29199 40.021C7.4155 58.7818 22.5732 73.9633 41.1477 73.9297Z' stroke='#fff' strokeWidth='1.5' strokeMiterlimit='10' />
      <path d='M41.1263 73.8359C51.0045 73.8136 58.9205 58.6285 58.8073 39.9192C58.694 21.2098 50.5943 6.06098 40.7161 6.08332C30.8379 6.10567 22.9219 21.2907 23.0352 40.0001C23.1484 58.7095 31.2481 73.8583 41.1263 73.8359Z' stroke='#fff' strokeWidth='1.5' strokeMiterlimit='10' />
      <path d='M7.11914 39.8867L74.719 39.5995' stroke='#fff' strokeWidth='1.5' strokeMiterlimit='10' />
      <path d='M9.5 27.5076L72.2542 27.2409' stroke='#fff' strokeWidth='1.5' strokeMiterlimit='10' />
      <path d='M18.0156 15.1169L63.6156 14.9232' stroke='#fff' strokeWidth='1.5' strokeMiterlimit='10' />
      <path d='M18.0078 64.7942L64.054 64.5984' stroke='#fff' strokeWidth='1.5' strokeMiterlimit='10' />
      <path d='M9.51172 52.4614L72.4352 52.1937' stroke='#fff' strokeWidth='1.5' strokeMiterlimit='10' />
      <path d='M65.7781 40.0175C45.4753 39.9779 40.9169 44.5589 40.9429 64.9808C40.9168 44.5435 36.3512 39.94 16.0638 39.9004C36.3666 39.94 40.925 35.359 40.899 14.9372C40.925 35.359 45.4905 39.9625 65.7781 40.0175Z' fill='#fff' />
      <path d='M40.7773 6.15967L41.0645 73.7439' stroke='#fff' strokeWidth='1.5' strokeMiterlimit='10' />
    </svg>
  ),
  ErrorBadge: (props?: IconProps) => (
    <svg
      fill='none'
      height='24'
      shapeRendering='geometricPrecision'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      width='24'
      role='img'
      {...props}
    >
      <path d='M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z' />
      <path d='M12 8v4' />
      <path d='M12 16h.01' />
    </svg>
  ),
  EyeIcon: (props?: IconProps) => (
    <svg
      fill='none'
      height='24'
      shapeRendering='geometricPrecision'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      width='24'
      role='img'
      {...props}
    >
      <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
      <circle cx='12' cy='12' r='3' />
    </svg>
  ),
  EyeIconOff: (props?: IconProps) => (
    <svg
      fill='none'
      height='24'
      shapeRendering='geometricPrecision'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      width='24'
      role='img'
      {...props}
    >
      <path d='M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94' />
      <path d='M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19' />
      <path d='M3.24 9.9a3 3 0 114.24 4.24' />
      <path d='M1 1l22 22' />
    </svg>
  ),
  GithubIcon: (props?: IconProps) => (
    <svg
      stroke='currentColor'
      fill='var(--grey4)'
      strokeWidth='0'
      viewBox='0 0 1024 1024'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      {...props}
    >
      <path
        d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z'
      />
    </svg>
  ),
  GoogleIcon: (props?: IconProps) => (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      version='1.1'
      x='0px'
      y='0px'
      viewBox='0 0 48 48'
      enableBackground='new 0 0 48 48'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      {...props}
    >
      <path
        fill='#FFC107'
        d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
    	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
    	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
      />
      <path
        fill='#FF3D00'
        d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
    	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
      />
      <path
        fill='#4CAF50'
        d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
    	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
      />
      <path
        fill='#1976D2'
        d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
    	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
      />
    </svg>
  ),
  GradientFill: (props?: IconProps) => (
    <svg
      {...props}
      viewBox='0 0 100 100'
    >
      <filter
        id='grainy2'
        x='0'
        y='0'
        width='100%'
        height='100%'
      >
        <feTurbulence
          type='fractalNoise'
          baseFrequency='0.8'
          numOctaves='3'
          seed='5'
          stitchTiles='stitch'
          result='turbulence'
        />
      </filter>
    </svg>
  ),
  Mail: (props?: IconProps) => (
    <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path fill='none' d='M0 0h24v24H0V0z' />
      <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z' />
    </svg>
  ),
  Menu: (props?: IconProps) => (
    <svg
      fill='none'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      stroke='currentColor'
      {...props}
    >
      <g>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4
      6h16'
        />
      </g>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4
      12h16'
      />
      <g>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4
      18h16'
        />
      </g>
    </svg>
  ),
  Moon: (props?: IconProps) => (
    <svg
      stroke='none'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 16 16'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      {...props}
    >
      <path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z' />
    </svg>
  ),
  Send: (props?: IconProps) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}>
      <path d='m3 3 3 9-3 9 19-9Z' />
      <path d='M6 12h16' />
    </svg>
  ),
  Sun: (props?: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='3 3 18 18'
      stroke='currentColor'
      role='img'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        fill='currentColor'
        d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
      />
    </svg>
  ),
};

export default IconsData;
