import React from 'react';
import logo from '../assets/skylab_logo.png';

const Footer = () => {
  return (
    <footer>
      <div className='bg-gradient-to-t h-32 from-black to-black/0'></div>
      <div className='bg-black flex flex-col gap-8 sm:gap-0 sm:flex-row items-center justify-between px-4 sm:px-10 md:px-20 py-4 md:py-10'>
        <a href='https://yildizskylab.com'>
          <img className='h-16 sm:h-24 md:h-32 lg:h-40' src={logo} alt='logo' />
        </a>
        <div className='flex items-center gap-4 md:gap-6'>
          <a href='https://www.instagram.com/ytuskylab/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-12 sm:h-16 md:h-24'
              viewBox='0 0 94 94'
              fill='none'
            >
              <g clip-path='url(#clip0_43_48)'>
                <path
                  d='M94 47.0012C94 72.9597 72.9573 94.0024 46.9988 94.0024C21.0427 94 0 72.9573 0 47.0012C0 21.0427 21.0427 0 47.0012 0C72.9597 0 94.0024 21.0427 94.0024 47.0012H94Z'
                  fill='#121214'
                />
                <path
                  d='M59.7522 22.3462H34.2479C27.6761 22.3462 22.3462 27.6761 22.3462 34.2479V59.7522C22.3462 66.324 27.6761 71.6539 34.2479 71.6539H59.7522C66.324 71.6539 71.6539 66.324 71.6539 59.7522V34.2479C71.6539 27.6761 66.324 22.3462 59.7522 22.3462ZM67.4028 58.9029C67.4028 63.5964 63.5941 67.4052 58.9006 67.4052H35.0972C30.4037 67.4052 26.5949 63.5964 26.5949 58.9029V35.0995C26.5949 30.406 30.4037 26.5973 35.0972 26.5973H58.9006C63.5941 26.5973 67.4028 30.406 67.4028 35.0995V58.9029Z'
                  fill='white'
                />
                <path
                  d='M47.0249 34.2478C39.987 34.2478 34.2739 39.9609 34.2739 46.9988C34.2739 54.0367 39.987 59.7498 47.0249 59.7498C54.0628 59.7498 59.7759 54.0367 59.7759 46.9988C59.7759 39.9609 54.0628 34.2478 47.0249 34.2478ZM47.0249 55.501C42.3409 55.501 38.5227 51.6828 38.5227 46.9988C38.5227 42.3147 42.3409 38.4965 47.0249 38.4965C51.7089 38.4965 55.5271 42.3147 55.5271 46.9988C55.5271 51.6828 51.7089 55.501 47.0249 55.501Z'
                  fill='white'
                />
                <path
                  d='M60.6275 35.9488C62.0359 35.9488 63.1777 34.807 63.1777 33.3986C63.1777 31.9901 62.0359 30.8484 60.6275 30.8484C59.219 30.8484 58.0773 31.9901 58.0773 33.3986C58.0773 34.807 59.219 35.9488 60.6275 35.9488Z'
                  fill='white'
                />
              </g>
              <defs>
                <clipPath id='clip0_43_48'>
                  <rect width='94' height='94' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href='https://www.linkedin.com/company/ytuskylab/'>
            <svg
              className='h-12 sm:h-16 md:h-24'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 94 94'
              fill='none'
            >
              <g clip-path='url(#clip0_43_36)'>
                <path
                  d='M94 47.0012C94 72.9597 72.9573 94.0024 46.9988 94.0024C21.0427 94 0 72.9573 0 47.0012C0 21.0427 21.0427 0 47.0012 0C72.9597 0 94.0024 21.0427 94.0024 47.0012H94Z'
                  fill='#121214'
                />
                <path
                  d='M30.3539 34.4347C33.6973 34.4347 36.4077 31.7243 36.4077 28.3809C36.4077 25.0375 33.6973 22.3271 30.3539 22.3271C27.0105 22.3271 24.3002 25.0375 24.3002 28.3809C24.3002 31.7243 27.0105 34.4347 30.3539 34.4347Z'
                  fill='white'
                />
                <path
                  d='M34.9457 38.4705H25.7598C25.5103 38.4705 25.308 38.6728 25.308 38.9223V68.285C25.308 68.5346 25.5103 68.7369 25.7598 68.7369H34.9457C35.1953 68.7369 35.3976 68.5346 35.3976 68.285V38.9223C35.3976 38.6728 35.1953 38.4705 34.9457 38.4705Z'
                  fill='white'
                />
                <path
                  d='M69.7022 49.568V66.7191C69.7022 67.8286 68.7938 68.737 67.6843 68.737H61.6305C60.521 68.737 59.6126 67.8286 59.6126 66.7191V52.5937C59.6126 49.8093 57.3534 47.55 54.569 47.55C51.7846 47.55 49.5254 49.8093 49.5254 52.5937V66.7191C49.5254 67.8286 48.617 68.737 47.5075 68.737H41.4537C40.3442 68.737 39.4358 67.8286 39.4358 66.7191V40.4861C39.4358 39.3766 40.3442 38.4682 41.4537 38.4682H47.5075C48.617 38.4682 49.5254 39.3766 49.5254 40.4861V41.7778C51.5433 39.1637 54.8836 37.4604 58.6048 37.4604C64.1736 37.4604 69.7022 41.4963 69.7022 49.568Z'
                  fill='white'
                />
              </g>
              <defs>
                <clipPath id='clip0_43_36'>
                  <rect width='94' height='94' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href='https://twitter.com/SkyLabKulubu'>
            <svg
              className='h-12 sm:h-16 md:h-24'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 94 94'
              fill='none'
            >
              <g clip-path='url(#clip0_43_33)'>
                <path
                  d='M94 47.0012C94 72.9597 72.9573 94.0024 46.9988 94.0024C21.0427 94 0 72.9573 0 47.0012C0 21.0427 21.0427 0 47.0012 0C72.9597 0 94.0024 21.0427 94.0024 47.0012H94Z'
                  fill='#121214'
                />
                <path
                  d='M53.7835 42.6837L72.7965 22.3484H65.5764L50.6538 38.3119L39.2252 22.3484H19.4766L39.4665 50.2728L19.4766 71.6561H26.6966L42.5986 54.6469L54.7748 71.6561H74.5234L53.7835 42.6861V42.6837ZM29.6513 27.5765H36.5354L64.3463 66.4232H57.4622L29.6513 27.5765Z'
                  fill='white'
                />
              </g>
              <defs>
                <clipPath id='clip0_43_33'>
                  <rect width='94' height='94' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href='https://www.youtube.com/@SKYLABKulubu'>
            <svg
              className='h-12 sm:h-16 md:h-24'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 94 94'
              fill='none'
            >
              <g clip-path='url(#clip0_43_45)'>
                <path
                  d='M94 47.0012C94 72.9597 72.9573 94.0024 46.9988 94.0024C21.0427 94 0 72.9573 0 47.0012C0 21.0427 21.0427 0 47.0012 0C72.9597 0 94.0024 21.0427 94.0024 47.0012H94Z'
                  fill='#121214'
                />
                <path
                  d='M67.256 27.0845H26.7462C22.7435 27.0845 19.4978 30.3302 19.4978 34.3305V59.6669C19.4978 63.6696 22.7435 66.9129 26.7462 66.9129H67.256C71.2564 66.9129 74.5021 63.6696 74.5021 59.6669V34.3305C74.5021 30.3302 71.2564 27.0845 67.256 27.0845ZM53.5067 48.7493L42.2414 54.3796C40.9403 55.0302 39.412 54.0863 39.412 52.6337V41.3731C39.412 39.9206 40.9426 38.9767 42.2414 39.6249L53.5067 45.2552C54.945 45.9744 54.945 48.0301 53.5067 48.7493Z'
                  fill='white'
                />
              </g>
              <defs>
                <clipPath id='clip0_43_45'>
                  <rect width='94' height='94' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
