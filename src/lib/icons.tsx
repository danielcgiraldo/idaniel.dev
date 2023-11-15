export const LockOpenIcon = ({ className = "" }: { className?: string }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
    >
        <path
            d="M2.70386 23.0611H13.4265C15.1491 23.0611 16.0632 22.1235 16.0632 20.272V12.1978C16.0632 10.3579 15.1491 9.42041 13.4265 9.42041H2.70386C0.981201 9.42041 0.0671387 10.3579 0.0671387 12.1978V20.272C0.0671387 22.1235 0.981201 23.0611 2.70386 23.0611ZM12.2898 10.3345H14.1413V6.38526C14.1413 3.42041 16.0398 1.86182 18.2312 1.86182C20.4226 1.86182 22.321 3.42041 22.321 6.38526V8.98682C22.321 9.67823 22.7312 10.0298 23.2585 10.0298C23.7624 10.0298 24.1843 9.71338 24.1843 8.98682V6.63135C24.1843 2.2251 21.2898 0.0922852 18.2312 0.0922852C15.1609 0.0922852 12.2898 2.2251 12.2898 6.63135V10.3345Z"
            fill="currentColor"
        />
    </svg>
);

export const SearchIcon = ({ className = "" }: { className?: string }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="24"
        viewBox="0 0 23 24"
        fill="none"
    >
        <path
            d="M0.0126953 9.44677C0.0126953 14.603 4.208 18.7983 9.36425 18.7983C11.4033 18.7983 13.2666 18.1421 14.8018 17.0405L20.5674 22.8179C20.8369 23.0874 21.1885 23.2163 21.5635 23.2163C22.3604 23.2163 22.9111 22.6186 22.9111 21.8335C22.9111 21.4585 22.7705 21.1186 22.5244 20.8725L16.7939 15.1069C18.001 13.5366 18.7158 11.5796 18.7158 9.44677C18.7158 4.29052 14.5205 0.0952148 9.36425 0.0952148C4.208 0.0952148 0.0126953 4.29052 0.0126953 9.44677ZM2.01661 9.44677C2.01661 5.39209 5.30958 2.09912 9.36425 2.09912C13.4189 2.09912 16.7119 5.39209 16.7119 9.44677C16.7119 13.5014 13.4189 16.7944 9.36425 16.7944C5.30958 16.7944 2.01661 13.5014 2.01661 9.44677Z"
            fill="currentColor"
        />
    </svg>
);

export const LocationIcon = ({ className = "" }: { className?: string }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
    >
        <path
            d="M1.63787 11.8855L10.1808 11.9206C10.3566 11.9206 10.4152 11.9792 10.4152 12.155L10.4386 20.6277C10.4386 22.3738 12.5363 22.7839 13.3214 21.0847L21.9816 2.46359C22.7667 0.752657 21.4191 -0.372343 19.7785 0.389376L1.05193 9.07297C-0.448065 9.76437 -0.155096 11.8738 1.63787 11.8855Z"
            fill="currentColor"
        />
    </svg>
);

export const LockIcon = ({ className = "" }: { className?: string }) => (
    <svg
        className={className}
        width="13"
        height="17"
        viewBox="0 0 13 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3.05029 6.90234V4.53933C3.05029 -0.179767 9.92529 -0.179787 9.92529 4.53933C9.92529 6.69663 9.92529 6.9 9.92529 6.9"
            stroke="currentColor"
        />
        <path
            d="M10.45 7.40137H2.45C1.64919 7.40137 1 8.03783 1 8.82294V14.9014C1 15.6865 1.64919 16.3229 2.45 16.3229H10.45C11.2508 16.3229 11.9 15.6865 11.9 14.9014V8.82294C11.9 8.03783 11.2508 7.40137 10.45 7.40137Z"
            stroke="currentColor"
        />
    </svg>
);

export const ChatIcon = ({ className = "" }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={className}
    >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" x2="15" y1="10" y2="10" />
        <line x1="12" x2="12" y1="7" y2="13" />
    </svg>
);

export const MenuIcon = ({ className = "" }: { className?: string }) => (
    <svg aria-hidden="true" className={className} viewBox="0 0 16 16">
        <rect x="1" y="3" fill="currentColor" width="14" height="2"></rect>
        <rect x="1" y="7" fill="currentColor" width="14" height="2"></rect>
        <rect x="1" y="11" fill="currentColor" width="14" height="2"></rect>
    </svg>
);
