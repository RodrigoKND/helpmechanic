import { Link } from 'react-router-dom';

export default function Logo({ width, height}) {
    return (
        <Link to='/'>
            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1"
                viewBox="0 0 1366 768" width={width} height={height} >
                <title>helpMechanic</title>
                <rect x="346.3" y="112" width="101.94" height="468.36" rx="16.67" fill='blue' />
                <rect x="583.85" y="112" width="101.94" height="468.36" rx="16.67" fill='blue' />
                <rect x="346.3" y="277.42" width="338.52" height="101.94" rx="16.67" fill='blue' />
                <path
                    d="M856.75,141.82V541c0,17.66-14.79,32-33,32H787.84c-18.24,0-33-14.32-33-32V151.36c0-17.66,14.79-32,33-32h56.22"
                    fill='blue' />
                <path d="M959.36,313.91c-.8-1.35-1.61-2.7-2.43-4l2.41,4Z"
                    fill='red'/>
                <path
                    d="M919.4,404.55,790.54,188.39c-9.12-15.3-3.71-34.86,12.09-43.69l13.28-7.42c15.79-8.84,36-3.59,45.11,11.7l95.91,160.9" fill="blue" /><line x1="922.14" y1="403.02" x2="919.4" y2="404.55" fill="blue" /><path d="M982.45,141.85V541c0,17.66,14.78,32,33,32h35.89c18.24,0,33-14.32,33-32V151.39c0-17.67-14.78-32-33-32H995.13" fill="blue" /><path d="M879.84,313.94c.8-1.35,1.61-2.7,2.43-4l-2.41,4Z" fill="blue" /><path d="M919.8,404.58l128.86-216.16c9.12-15.3,3.71-34.86-12.09-43.69l-13.28-7.42c-15.79-8.84-36-3.6-45.11,11.7l-95.91,160.9"
                        fill='blue' />
                <line x1="917.05" y1="403.05" x2="919.8" y2="404.58" fill='blue' />
                <rect x="212.72" y="572.98" width="977.28" height="59.01" fill="none" stroke="blue"
                    strokeMiterlimit="10" strokeWidth="20" />
                <circle cx="255.13" cy="606.17" r="81.13" />
                <circle cx="256.98" cy="606.17" r="42.41" fill="#fff" />
            </svg>
        </Link>
    );
}