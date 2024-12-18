import React from 'react';

function HomePage() {
  return <div>
    <div className="mx-2 lg:mx-12 py-20 flex flex-col justify-center items-center">
      <div role="alert" class="alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span>MOOD is in beta and this version even more!</span>
      </div>
      <p class="my-4">Please report any bugs to me. gl finding who.</p>
    </div>
  </div>;
}

export default HomePage;
