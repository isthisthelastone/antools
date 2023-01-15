import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers\' data will be safe and secure.',
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools that you\'re already using.',
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ')
}
import './App.css'

function App() {
  return (
    <Popover className='relative bg-white'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin={'true'} />
        <link
          href='https://fonts.googleapis.com/css2?family=Lora:wght@500&amp;family=Poppins:wght@400;500;600&amp;family=Roboto&amp;display=swap&_v=20220204162059'
          rel='stylesheet'
        />
        <link rel='stylesheet' href='css/style.min.css?_v=20220204162059' />
        <link
          rel='stylesheet'
          href='https://unpkg.com/swiper@7/swiper-bundle.min.css?_v=20220204162059'
        />
        <title>Antools</title>
      </head>

      <body>
        <header className='header'>
          <div className='container'>
            <div className='header__inner'>
              <a className='logo' href='#'>
                {' '}
                <img src='public/logo.svg' alt='Лого' />
              </a>
              <nav className='menu'>
                <ul className='menu__list'>
                  <li className='menu__item'>
                    <a className='menu__link' href='#'>
                      Home
                    </a>
                  </li>
                  <li className='menu__item'>
                    <a className='menu__link menu-link__arrow' href='#'>
                      Categories
                    </a>
                    <ul className='menu__category'>
                      <li className='menu-category__item'>
                        <a className='menu__link' href='#'>
                          1
                        </a>
                      </li>
                      <li className='menu-category__item'>
                        <a className='menu__link' href='#'>
                          2
                        </a>
                      </li>
                      <li className='menu-category__item'>
                        <a className='menu__link' href='#'>
                          3
                        </a>
                      </li>
                      <li className='menu-category__item'>
                        <a className='menu__link' href='#'>
                          4
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='menu__item'>
                    <a className='menu__link' href='#'>
                      My Collections
                    </a>
                  </li>
                  <li className='menu__item'>
                    <a className='menu__link' href='#'>
                      Blog
                    </a>
                  </li>
                </ul>
                <div className='header__buttons header__buttons--mobile'>
                  <a className='header__login' href='#'>
                    Login
                  </a>
                  <a className='btn header__btn' href='#'>
                    Sign Up
                  </a>
                </div>
              </nav>
              <div className='header__buttons'>
                <a className='header__login' href='#'>
                  Login
                </a>
                <a className='btn header__btn' href='#'>
                  Sign Up
                </a>
              </div>
              <div className='header__burger'>
                <span> </span>
              </div>
            </div>
          </div>
        </header>
        <main className='main'>
          <section className='hello'>
            <div className='hello__wrapper'>
              <h1 className='hello__title'>Awesome tools for Designer & Developer.</h1>
              <p className='hello__text'>
                Antool is a web collection of information on paid or free Design and Development
                tools
              </p>
              <form className='hello__form form'>
                <div className='form__input'>
                  <input type='text' placeholder='find more than 430+ tools...' />
                  <button className='btn form__btn'>Search</button>
                </div>
              </form>
              <ul className='socials'>
                <li className='socials__item'>
                  <a className='socials__link' href='#'>
                    <img src='public/fb.svg' alt='Facebook' />
                  </a>
                </li>
                <li className='socials__item'>
                  <a className='socials__link' href='#'>
                    <img src='public/insta.svg' alt='Instagram' />
                  </a>
                </li>
                <li className='socials__item'>
                  <a className='socials__link' href='#'>
                    <img src='public/tw.svg' alt='Twitter' />
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className='tools'>
            <div className='container'>
              <h2 className='title tools__title'>Most Popular Tools</h2>
              <p className='tools__text'>
                Tools for the best Designers and Developers most popularly used in the world
              </p>
              <div className='tools__items'>
                <div className='tools__item'>
                  <div className='tools-item__header'>
                    <img src='public/figma.svg' alt='figma' />
                    <h3 className='tools-item__title'>
                      FIGMA <span>Free</span>
                    </h3>
                  </div>
                  <p className='tools-item__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className='tools-item__footer'>
                    <div className='tools-item__add'>
                      <svg
                        className='svg__heart'
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect width='42' height='42' rx='8' fill='#1E252B' />
                        <path
                          d='M26.8333 12.25C24.3833 12.25 22.225 13.475 21 15.4C19.775 13.475 17.6167 12.25 15.1667 12.25C11.3167 12.25 8.16667 15.4 8.16667 19.25C8.16667 26.1917 21 33.25 21 33.25C21 33.25 33.8333 26.25 33.8333 19.25C33.8333 15.4 30.6833 12.25 26.8333 12.25Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                      </svg>
                      <svg
                        className='svg__folder'
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect width='42' height='42' rx='8' fill='#1E252B' />
                        <path
                          d='M23.5 23.25H22.25V22C22.25 21.6685 22.1183 21.3505 21.8839 21.1161C21.6495 20.8817 21.3315 20.75 21 20.75C20.6685 20.75 20.3505 20.8817 20.1161 21.1161C19.8817 21.3505 19.75 21.6685 19.75 22V23.25H18.5C18.1685 23.25 17.8505 23.3817 17.6161 23.6161C17.3817 23.8505 17.25 24.1685 17.25 24.5C17.25 24.8315 17.3817 25.1495 17.6161 25.3839C17.8505 25.6183 18.1685 25.75 18.5 25.75H19.75V27C19.75 27.3315 19.8817 27.6495 20.1161 27.8839C20.3505 28.1183 20.6685 28.25 21 28.25C21.3315 28.25 21.6495 28.1183 21.8839 27.8839C22.1183 27.6495 22.25 27.3315 22.25 27V25.75H23.5C23.8315 25.75 24.1495 25.6183 24.3839 25.3839C24.6183 25.1495 24.75 24.8315 24.75 24.5C24.75 24.1685 24.6183 23.8505 24.3839 23.6161C24.1495 23.3817 23.8315 23.25 23.5 23.25Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                        <path
                          d='M30.375 15.8125H21.625L18.3375 11.8375C18.2212 11.6941 18.0745 11.5783 17.9081 11.4983C17.7417 11.4183 17.5596 11.3762 17.375 11.375H11.625C10.8083 11.365 10.0208 11.679 9.43512 12.2483C8.84942 12.8176 8.51317 13.5958 8.5 14.4125V29.5875C8.51317 30.4042 8.84942 31.1824 9.43512 31.7517C10.0208 32.321 10.8083 32.635 11.625 32.625H30.375C31.1917 32.635 31.9792 32.321 32.5649 31.7517C33.1506 31.1824 33.4868 30.4042 33.5 29.5875V18.85C33.4868 18.0333 33.1506 17.2551 32.5649 16.6858C31.9792 16.1165 31.1917 15.8025 30.375 15.8125ZM31 29.5625C30.9953 29.6392 30.9753 29.7142 30.9411 29.783C30.9069 29.8518 30.8593 29.9131 30.801 29.9632C30.7427 30.0133 30.675 30.0512 30.6019 30.0747C30.5287 30.0982 30.4515 30.1068 30.375 30.1H11.625C11.5485 30.1068 11.4713 30.0982 11.3982 30.0747C11.325 30.0512 11.2573 30.0133 11.199 29.9632C11.1407 29.9131 11.0931 29.8518 11.0589 29.783C11.0247 29.7142 11.0047 29.6392 11 29.5625V14.4125C11.0047 14.3358 11.0247 14.2608 11.0589 14.192C11.0931 14.1231 11.1407 14.0619 11.199 14.0118C11.2573 13.9617 11.325 13.9237 11.3982 13.9002C11.4713 13.8767 11.5485 13.8682 11.625 13.875H16.7875L20.0375 17.85C20.1538 17.9934 20.3005 18.1092 20.4669 18.1892C20.6333 18.2692 20.8154 18.3113 21 18.3125H30.375C30.4515 18.3057 30.5287 18.3142 30.6019 18.3377C30.675 18.3612 30.7427 18.3992 30.801 18.4493C30.8593 18.4994 30.9069 18.5606 30.9411 18.6295C30.9753 18.6983 30.9953 18.7733 31 18.85V29.5625Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                      </svg>
                    </div>
                    <a className='tools-item__link' href='#'>
                      Visit
                    </a>
                  </div>
                </div>
                <div className='tools__item'>
                  <div className='tools-item__header'>
                    <img src='public/sketch.svg' alt='sketch' />
                    <h3 className='tools-item__title'>
                      Sketch <span>Trial & Paid</span>
                    </h3>
                  </div>
                  <p className='tools-item__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className='tools-item__footer'>
                    <div className='tools-item__add'>
                      <svg
                        className='svg__heart'
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect width='42' height='42' rx='8' fill='#1E252B' />
                        <path
                          d='M26.8333 12.25C24.3833 12.25 22.225 13.475 21 15.4C19.775 13.475 17.6167 12.25 15.1667 12.25C11.3167 12.25 8.16667 15.4 8.16667 19.25C8.16667 26.1917 21 33.25 21 33.25C21 33.25 33.8333 26.25 33.8333 19.25C33.8333 15.4 30.6833 12.25 26.8333 12.25Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                      </svg>
                      <svg
                        className='svg__folder'
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect width='42' height='42' rx='8' fill='#1E252B' />
                        <path
                          d='M23.5 23.25H22.25V22C22.25 21.6685 22.1183 21.3505 21.8839 21.1161C21.6495 20.8817 21.3315 20.75 21 20.75C20.6685 20.75 20.3505 20.8817 20.1161 21.1161C19.8817 21.3505 19.75 21.6685 19.75 22V23.25H18.5C18.1685 23.25 17.8505 23.3817 17.6161 23.6161C17.3817 23.8505 17.25 24.1685 17.25 24.5C17.25 24.8315 17.3817 25.1495 17.6161 25.3839C17.8505 25.6183 18.1685 25.75 18.5 25.75H19.75V27C19.75 27.3315 19.8817 27.6495 20.1161 27.8839C20.3505 28.1183 20.6685 28.25 21 28.25C21.3315 28.25 21.6495 28.1183 21.8839 27.8839C22.1183 27.6495 22.25 27.3315 22.25 27V25.75H23.5C23.8315 25.75 24.1495 25.6183 24.3839 25.3839C24.6183 25.1495 24.75 24.8315 24.75 24.5C24.75 24.1685 24.6183 23.8505 24.3839 23.6161C24.1495 23.3817 23.8315 23.25 23.5 23.25Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                        <path
                          d='M30.375 15.8125H21.625L18.3375 11.8375C18.2212 11.6941 18.0745 11.5783 17.9081 11.4983C17.7417 11.4183 17.5596 11.3762 17.375 11.375H11.625C10.8083 11.365 10.0208 11.679 9.43512 12.2483C8.84942 12.8176 8.51317 13.5958 8.5 14.4125V29.5875C8.51317 30.4042 8.84942 31.1824 9.43512 31.7517C10.0208 32.321 10.8083 32.635 11.625 32.625H30.375C31.1917 32.635 31.9792 32.321 32.5649 31.7517C33.1506 31.1824 33.4868 30.4042 33.5 29.5875V18.85C33.4868 18.0333 33.1506 17.2551 32.5649 16.6858C31.9792 16.1165 31.1917 15.8025 30.375 15.8125ZM31 29.5625C30.9953 29.6392 30.9753 29.7142 30.9411 29.783C30.9069 29.8518 30.8593 29.9131 30.801 29.9632C30.7427 30.0133 30.675 30.0512 30.6019 30.0747C30.5287 30.0982 30.4515 30.1068 30.375 30.1H11.625C11.5485 30.1068 11.4713 30.0982 11.3982 30.0747C11.325 30.0512 11.2573 30.0133 11.199 29.9632C11.1407 29.9131 11.0931 29.8518 11.0589 29.783C11.0247 29.7142 11.0047 29.6392 11 29.5625V14.4125C11.0047 14.3358 11.0247 14.2608 11.0589 14.192C11.0931 14.1231 11.1407 14.0619 11.199 14.0118C11.2573 13.9617 11.325 13.9237 11.3982 13.9002C11.4713 13.8767 11.5485 13.8682 11.625 13.875H16.7875L20.0375 17.85C20.1538 17.9934 20.3005 18.1092 20.4669 18.1892C20.6333 18.2692 20.8154 18.3113 21 18.3125H30.375C30.4515 18.3057 30.5287 18.3142 30.6019 18.3377C30.675 18.3612 30.7427 18.3992 30.801 18.4493C30.8593 18.4994 30.9069 18.5606 30.9411 18.6295C30.9753 18.6983 30.9953 18.7733 31 18.85V29.5625Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                      </svg>
                    </div>
                    <a className='tools-item__link' href='#'>
                      Visit
                    </a>
                  </div>
                </div>
                <div className='tools__item'>
                  <div className='tools-item__header'>
                    <img src='public/visual-studio-code.svg' alt='notion' />
                    <h3 className='tools-item__title'>
                      Visual Studio Code <span>Free</span>
                    </h3>
                  </div>
                  <p className='tools-item__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className='tools-item__footer'>
                    <div className='tools-item__add'>
                      <svg
                        className='svg__heart'
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect width='42' height='42' rx='8' fill='#1E252B' />
                        <path
                          d='M26.8333 12.25C24.3833 12.25 22.225 13.475 21 15.4C19.775 13.475 17.6167 12.25 15.1667 12.25C11.3167 12.25 8.16667 15.4 8.16667 19.25C8.16667 26.1917 21 33.25 21 33.25C21 33.25 33.8333 26.25 33.8333 19.25C33.8333 15.4 30.6833 12.25 26.8333 12.25Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                      </svg>
                      <svg
                        className='svg__folder'
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect width='42' height='42' rx='8' fill='#1E252B' />
                        <path
                          d='M23.5 23.25H22.25V22C22.25 21.6685 22.1183 21.3505 21.8839 21.1161C21.6495 20.8817 21.3315 20.75 21 20.75C20.6685 20.75 20.3505 20.8817 20.1161 21.1161C19.8817 21.3505 19.75 21.6685 19.75 22V23.25H18.5C18.1685 23.25 17.8505 23.3817 17.6161 23.6161C17.3817 23.8505 17.25 24.1685 17.25 24.5C17.25 24.8315 17.3817 25.1495 17.6161 25.3839C17.8505 25.6183 18.1685 25.75 18.5 25.75H19.75V27C19.75 27.3315 19.8817 27.6495 20.1161 27.8839C20.3505 28.1183 20.6685 28.25 21 28.25C21.3315 28.25 21.6495 28.1183 21.8839 27.8839C22.1183 27.6495 22.25 27.3315 22.25 27V25.75H23.5C23.8315 25.75 24.1495 25.6183 24.3839 25.3839C24.6183 25.1495 24.75 24.8315 24.75 24.5C24.75 24.1685 24.6183 23.8505 24.3839 23.6161C24.1495 23.3817 23.8315 23.25 23.5 23.25Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                        <path
                          d='M30.375 15.8125H21.625L18.3375 11.8375C18.2212 11.6941 18.0745 11.5783 17.9081 11.4983C17.7417 11.4183 17.5596 11.3762 17.375 11.375H11.625C10.8083 11.365 10.0208 11.679 9.43512 12.2483C8.84942 12.8176 8.51317 13.5958 8.5 14.4125V29.5875C8.51317 30.4042 8.84942 31.1824 9.43512 31.7517C10.0208 32.321 10.8083 32.635 11.625 32.625H30.375C31.1917 32.635 31.9792 32.321 32.5649 31.7517C33.1506 31.1824 33.4868 30.4042 33.5 29.5875V18.85C33.4868 18.0333 33.1506 17.2551 32.5649 16.6858C31.9792 16.1165 31.1917 15.8025 30.375 15.8125ZM31 29.5625C30.9953 29.6392 30.9753 29.7142 30.9411 29.783C30.9069 29.8518 30.8593 29.9131 30.801 29.9632C30.7427 30.0133 30.675 30.0512 30.6019 30.0747C30.5287 30.0982 30.4515 30.1068 30.375 30.1H11.625C11.5485 30.1068 11.4713 30.0982 11.3982 30.0747C11.325 30.0512 11.2573 30.0133 11.199 29.9632C11.1407 29.9131 11.0931 29.8518 11.0589 29.783C11.0247 29.7142 11.0047 29.6392 11 29.5625V14.4125C11.0047 14.3358 11.0247 14.2608 11.0589 14.192C11.0931 14.1231 11.1407 14.0619 11.199 14.0118C11.2573 13.9617 11.325 13.9237 11.3982 13.9002C11.4713 13.8767 11.5485 13.8682 11.625 13.875H16.7875L20.0375 17.85C20.1538 17.9934 20.3005 18.1092 20.4669 18.1892C20.6333 18.2692 20.8154 18.3113 21 18.3125H30.375C30.4515 18.3057 30.5287 18.3142 30.6019 18.3377C30.675 18.3612 30.7427 18.3992 30.801 18.4493C30.8593 18.4994 30.9069 18.5606 30.9411 18.6295C30.9753 18.6983 30.9953 18.7733 31 18.85V29.5625Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                      </svg>
                    </div>
                    <a className='tools-item__link' href='#'>
                      Visit
                    </a>
                  </div>
                </div>
                <div className='tools__item'>
                  <div className='tools-item__header'>
                    <img src='public/notion.svg' alt='slack' />
                    <h3 className='tools-item__title'>
                      Notion <span>Free & Paid</span>
                    </h3>
                  </div>
                  <p className='tools-item__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className='tools-item__footer'>
                    <div className='tools-item__add'>
                      <svg
                        className='svg__heart'
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect width='42' height='42' rx='8' fill='#1E252B' />
                        <path
                          d='M26.8333 12.25C24.3833 12.25 22.225 13.475 21 15.4C19.775 13.475 17.6167 12.25 15.1667 12.25C11.3167 12.25 8.16667 15.4 8.16667 19.25C8.16667 26.1917 21 33.25 21 33.25C21 33.25 33.8333 26.25 33.8333 19.25C33.8333 15.4 30.6833 12.25 26.8333 12.25Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                      </svg>
                      <svg
                        className='svg__folder'
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect width='42' height='42' rx='8' fill='#1E252B' />
                        <path
                          d='M23.5 23.25H22.25V22C22.25 21.6685 22.1183 21.3505 21.8839 21.1161C21.6495 20.8817 21.3315 20.75 21 20.75C20.6685 20.75 20.3505 20.8817 20.1161 21.1161C19.8817 21.3505 19.75 21.6685 19.75 22V23.25H18.5C18.1685 23.25 17.8505 23.3817 17.6161 23.6161C17.3817 23.8505 17.25 24.1685 17.25 24.5C17.25 24.8315 17.3817 25.1495 17.6161 25.3839C17.8505 25.6183 18.1685 25.75 18.5 25.75H19.75V27C19.75 27.3315 19.8817 27.6495 20.1161 27.8839C20.3505 28.1183 20.6685 28.25 21 28.25C21.3315 28.25 21.6495 28.1183 21.8839 27.8839C22.1183 27.6495 22.25 27.3315 22.25 27V25.75H23.5C23.8315 25.75 24.1495 25.6183 24.3839 25.3839C24.6183 25.1495 24.75 24.8315 24.75 24.5C24.75 24.1685 24.6183 23.8505 24.3839 23.6161C24.1495 23.3817 23.8315 23.25 23.5 23.25Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                        <path
                          d='M30.375 15.8125H21.625L18.3375 11.8375C18.2212 11.6941 18.0745 11.5783 17.9081 11.4983C17.7417 11.4183 17.5596 11.3762 17.375 11.375H11.625C10.8083 11.365 10.0208 11.679 9.43512 12.2483C8.84942 12.8176 8.51317 13.5958 8.5 14.4125V29.5875C8.51317 30.4042 8.84942 31.1824 9.43512 31.7517C10.0208 32.321 10.8083 32.635 11.625 32.625H30.375C31.1917 32.635 31.9792 32.321 32.5649 31.7517C33.1506 31.1824 33.4868 30.4042 33.5 29.5875V18.85C33.4868 18.0333 33.1506 17.2551 32.5649 16.6858C31.9792 16.1165 31.1917 15.8025 30.375 15.8125ZM31 29.5625C30.9953 29.6392 30.9753 29.7142 30.9411 29.783C30.9069 29.8518 30.8593 29.9131 30.801 29.9632C30.7427 30.0133 30.675 30.0512 30.6019 30.0747C30.5287 30.0982 30.4515 30.1068 30.375 30.1H11.625C11.5485 30.1068 11.4713 30.0982 11.3982 30.0747C11.325 30.0512 11.2573 30.0133 11.199 29.9632C11.1407 29.9131 11.0931 29.8518 11.0589 29.783C11.0247 29.7142 11.0047 29.6392 11 29.5625V14.4125C11.0047 14.3358 11.0247 14.2608 11.0589 14.192C11.0931 14.1231 11.1407 14.0619 11.199 14.0118C11.2573 13.9617 11.325 13.9237 11.3982 13.9002C11.4713 13.8767 11.5485 13.8682 11.625 13.875H16.7875L20.0375 17.85C20.1538 17.9934 20.3005 18.1092 20.4669 18.1892C20.6333 18.2692 20.8154 18.3113 21 18.3125H30.375C30.4515 18.3057 30.5287 18.3142 30.6019 18.3377C30.675 18.3612 30.7427 18.3992 30.801 18.4493C30.8593 18.4994 30.9069 18.5606 30.9411 18.6295C30.9753 18.6983 30.9953 18.7733 31 18.85V29.5625Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                      </svg>
                    </div>
                    <a className='tools-item__link' href='#'>
                      Visit
                    </a>
                  </div>
                </div>
                <div className='tools__item'>
                  <div className='tools-item__header'>
                    <img src='public/grommet.svg' alt='in' />
                    <h3 className='tools-item__title'>
                      Slack <span>Free & Paid</span>
                    </h3>
                  </div>
                  <p className='tools-item__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className='tools-item__footer'>
                    <div className='tools-item__add'>
                      <svg
                        className='svg__heart'
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect width='42' height='42' rx='8' fill='#1E252B' />
                        <path
                          d='M26.8333 12.25C24.3833 12.25 22.225 13.475 21 15.4C19.775 13.475 17.6167 12.25 15.1667 12.25C11.3167 12.25 8.16667 15.4 8.16667 19.25C8.16667 26.1917 21 33.25 21 33.25C21 33.25 33.8333 26.25 33.8333 19.25C33.8333 15.4 30.6833 12.25 26.8333 12.25Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                      </svg>
                      <svg
                        className='svg__folder'
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect width='42' height='42' rx='8' fill='#1E252B' />
                        <path
                          d='M23.5 23.25H22.25V22C22.25 21.6685 22.1183 21.3505 21.8839 21.1161C21.6495 20.8817 21.3315 20.75 21 20.75C20.6685 20.75 20.3505 20.8817 20.1161 21.1161C19.8817 21.3505 19.75 21.6685 19.75 22V23.25H18.5C18.1685 23.25 17.8505 23.3817 17.6161 23.6161C17.3817 23.8505 17.25 24.1685 17.25 24.5C17.25 24.8315 17.3817 25.1495 17.6161 25.3839C17.8505 25.6183 18.1685 25.75 18.5 25.75H19.75V27C19.75 27.3315 19.8817 27.6495 20.1161 27.8839C20.3505 28.1183 20.6685 28.25 21 28.25C21.3315 28.25 21.6495 28.1183 21.8839 27.8839C22.1183 27.6495 22.25 27.3315 22.25 27V25.75H23.5C23.8315 25.75 24.1495 25.6183 24.3839 25.3839C24.6183 25.1495 24.75 24.8315 24.75 24.5C24.75 24.1685 24.6183 23.8505 24.3839 23.6161C24.1495 23.3817 23.8315 23.25 23.5 23.25Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                        <path
                          d='M30.375 15.8125H21.625L18.3375 11.8375C18.2212 11.6941 18.0745 11.5783 17.9081 11.4983C17.7417 11.4183 17.5596 11.3762 17.375 11.375H11.625C10.8083 11.365 10.0208 11.679 9.43512 12.2483C8.84942 12.8176 8.51317 13.5958 8.5 14.4125V29.5875C8.51317 30.4042 8.84942 31.1824 9.43512 31.7517C10.0208 32.321 10.8083 32.635 11.625 32.625H30.375C31.1917 32.635 31.9792 32.321 32.5649 31.7517C33.1506 31.1824 33.4868 30.4042 33.5 29.5875V18.85C33.4868 18.0333 33.1506 17.2551 32.5649 16.6858C31.9792 16.1165 31.1917 15.8025 30.375 15.8125ZM31 29.5625C30.9953 29.6392 30.9753 29.7142 30.9411 29.783C30.9069 29.8518 30.8593 29.9131 30.801 29.9632C30.7427 30.0133 30.675 30.0512 30.6019 30.0747C30.5287 30.0982 30.4515 30.1068 30.375 30.1H11.625C11.5485 30.1068 11.4713 30.0982 11.3982 30.0747C11.325 30.0512 11.2573 30.0133 11.199 29.9632C11.1407 29.9131 11.0931 29.8518 11.0589 29.783C11.0247 29.7142 11.0047 29.6392 11 29.5625V14.4125C11.0047 14.3358 11.0247 14.2608 11.0589 14.192C11.0931 14.1231 11.1407 14.0619 11.199 14.0118C11.2573 13.9617 11.325 13.9237 11.3982 13.9002C11.4713 13.8767 11.5485 13.8682 11.625 13.875H16.7875L20.0375 17.85C20.1538 17.9934 20.3005 18.1092 20.4669 18.1892C20.6333 18.2692 20.8154 18.3113 21 18.3125H30.375C30.4515 18.3057 30.5287 18.3142 30.6019 18.3377C30.675 18.3612 30.7427 18.3992 30.801 18.4493C30.8593 18.4994 30.9069 18.5606 30.9411 18.6295C30.9753 18.6983 30.9953 18.7733 31 18.85V29.5625Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                      </svg>
                    </div>
                    <a className='tools-item__link' href='#'>
                      Visit
                    </a>
                  </div>
                </div>
                <div className='tools__item'>
                  <div className='tools-item__header'>
                    <img src='public/in.svg' alt='figma' />
                    <h3 className='tools-item__title'>
                      Invision <span>Free & Paid</span>
                    </h3>
                  </div>
                  <p className='tools-item__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className='tools-item__footer'>
                    <div className='tools-item__add'>
                      <svg
                        className='svg__heart'
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect width='42' height='42' rx='8' fill='#1E252B' />
                        <path
                          d='M26.8333 12.25C24.3833 12.25 22.225 13.475 21 15.4C19.775 13.475 17.6167 12.25 15.1667 12.25C11.3167 12.25 8.16667 15.4 8.16667 19.25C8.16667 26.1917 21 33.25 21 33.25C21 33.25 33.8333 26.25 33.8333 19.25C33.8333 15.4 30.6833 12.25 26.8333 12.25Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                      </svg>
                      <svg
                        className='svg__folder'
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect width='42' height='42' rx='8' fill='#1E252B' />
                        <path
                          d='M23.5 23.25H22.25V22C22.25 21.6685 22.1183 21.3505 21.8839 21.1161C21.6495 20.8817 21.3315 20.75 21 20.75C20.6685 20.75 20.3505 20.8817 20.1161 21.1161C19.8817 21.3505 19.75 21.6685 19.75 22V23.25H18.5C18.1685 23.25 17.8505 23.3817 17.6161 23.6161C17.3817 23.8505 17.25 24.1685 17.25 24.5C17.25 24.8315 17.3817 25.1495 17.6161 25.3839C17.8505 25.6183 18.1685 25.75 18.5 25.75H19.75V27C19.75 27.3315 19.8817 27.6495 20.1161 27.8839C20.3505 28.1183 20.6685 28.25 21 28.25C21.3315 28.25 21.6495 28.1183 21.8839 27.8839C22.1183 27.6495 22.25 27.3315 22.25 27V25.75H23.5C23.8315 25.75 24.1495 25.6183 24.3839 25.3839C24.6183 25.1495 24.75 24.8315 24.75 24.5C24.75 24.1685 24.6183 23.8505 24.3839 23.6161C24.1495 23.3817 23.8315 23.25 23.5 23.25Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                        <path
                          d='M30.375 15.8125H21.625L18.3375 11.8375C18.2212 11.6941 18.0745 11.5783 17.9081 11.4983C17.7417 11.4183 17.5596 11.3762 17.375 11.375H11.625C10.8083 11.365 10.0208 11.679 9.43512 12.2483C8.84942 12.8176 8.51317 13.5958 8.5 14.4125V29.5875C8.51317 30.4042 8.84942 31.1824 9.43512 31.7517C10.0208 32.321 10.8083 32.635 11.625 32.625H30.375C31.1917 32.635 31.9792 32.321 32.5649 31.7517C33.1506 31.1824 33.4868 30.4042 33.5 29.5875V18.85C33.4868 18.0333 33.1506 17.2551 32.5649 16.6858C31.9792 16.1165 31.1917 15.8025 30.375 15.8125ZM31 29.5625C30.9953 29.6392 30.9753 29.7142 30.9411 29.783C30.9069 29.8518 30.8593 29.9131 30.801 29.9632C30.7427 30.0133 30.675 30.0512 30.6019 30.0747C30.5287 30.0982 30.4515 30.1068 30.375 30.1H11.625C11.5485 30.1068 11.4713 30.0982 11.3982 30.0747C11.325 30.0512 11.2573 30.0133 11.199 29.9632C11.1407 29.9131 11.0931 29.8518 11.0589 29.783C11.0247 29.7142 11.0047 29.6392 11 29.5625V14.4125C11.0047 14.3358 11.0247 14.2608 11.0589 14.192C11.0931 14.1231 11.1407 14.0619 11.199 14.0118C11.2573 13.9617 11.325 13.9237 11.3982 13.9002C11.4713 13.8767 11.5485 13.8682 11.625 13.875H16.7875L20.0375 17.85C20.1538 17.9934 20.3005 18.1092 20.4669 18.1892C20.6333 18.2692 20.8154 18.3113 21 18.3125H30.375C30.4515 18.3057 30.5287 18.3142 30.6019 18.3377C30.675 18.3612 30.7427 18.3992 30.801 18.4493C30.8593 18.4994 30.9069 18.5606 30.9411 18.6295C30.9753 18.6983 30.9953 18.7733 31 18.85V29.5625Z'
                          fill='white'
                          fillOpacity='0.38'
                        />
                      </svg>
                    </div>
                    <a className='tools-item__link' href='#'>
                      Visit
                    </a>
                  </div>
                </div>
              </div>
              <a className='tools__link' href='#'>
                Load more
              </a>
            </div>
          </section>
          <div className='partners'>
            <div className='container'>
              <div className='partners__box'>
                <h2 className='partners__title'>Trusted more than 150+ brand</h2>
                <ul className='partners__list'>
                  <li className='partners__item'>
                    <img src='public/microsoft.svg' alt='microsoft' />
                  </li>
                  <li className='partners__item'>
                    <img src='public/google.svg' alt='google' />
                  </li>
                  <li className='partners__item'>
                    <img src='public/slack.svg' alt='slack' />
                  </li>
                  <li className='partners__item'>
                    <img src='public/wordpress.svg' alt='wordpress' />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <section className='newTools'>
            <div className='container'>
              <div className='newTools__inner'>
                <div className='newTools__content'>
                  <h2 className='title newTools__title'>Newcomer Tools</h2>
                  <p className='newTools__text'>
                    Wow! see the latest update of the most recommended tools from reliable designers
                    and developers
                  </p>
                  <button className='newTools__btn btn'>Explore more</button>
                </div>
                <div className='newTools__items'>
                  <div className='newTools__item'>
                    <div className='newTools-item__header'>
                      <img src='public/zeplin.svg' alt='' />
                      <h2 className='newTools-item__title'>
                        Zeplin <span>Free & Paid</span>
                      </h2>
                    </div>
                    <p className='newTools-item__text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className='newTools-item__footer'>
                      <div className='newTools-item__add'>
                        <svg
                          className='svg__heart'
                          width='42'
                          height='42'
                          viewBox='0 0 42 42'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='42' height='42' rx='8' fill='#1E252B' />
                          <path
                            d='M26.8333 12.25C24.3833 12.25 22.225 13.475 21 15.4C19.775 13.475 17.6167 12.25 15.1667 12.25C11.3167 12.25 8.16667 15.4 8.16667 19.25C8.16667 26.1917 21 33.25 21 33.25C21 33.25 33.8333 26.25 33.8333 19.25C33.8333 15.4 30.6833 12.25 26.8333 12.25Z'
                            fill='white'
                            fillOpacity='0.38'
                          />
                        </svg>
                        <svg
                          className='svg__folder'
                          width='42'
                          height='42'
                          viewBox='0 0 42 42'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='42' height='42' rx='8' fill='#1E252B' />
                          <path
                            d='M23.5 23.25H22.25V22C22.25 21.6685 22.1183 21.3505 21.8839 21.1161C21.6495 20.8817 21.3315 20.75 21 20.75C20.6685 20.75 20.3505 20.8817 20.1161 21.1161C19.8817 21.3505 19.75 21.6685 19.75 22V23.25H18.5C18.1685 23.25 17.8505 23.3817 17.6161 23.6161C17.3817 23.8505 17.25 24.1685 17.25 24.5C17.25 24.8315 17.3817 25.1495 17.6161 25.3839C17.8505 25.6183 18.1685 25.75 18.5 25.75H19.75V27C19.75 27.3315 19.8817 27.6495 20.1161 27.8839C20.3505 28.1183 20.6685 28.25 21 28.25C21.3315 28.25 21.6495 28.1183 21.8839 27.8839C22.1183 27.6495 22.25 27.3315 22.25 27V25.75H23.5C23.8315 25.75 24.1495 25.6183 24.3839 25.3839C24.6183 25.1495 24.75 24.8315 24.75 24.5C24.75 24.1685 24.6183 23.8505 24.3839 23.6161C24.1495 23.3817 23.8315 23.25 23.5 23.25Z'
                            fill='white'
                            fillOpacity='0.38'
                          />
                          <path
                            d='M30.375 15.8125H21.625L18.3375 11.8375C18.2212 11.6941 18.0745 11.5783 17.9081 11.4983C17.7417 11.4183 17.5596 11.3762 17.375 11.375H11.625C10.8083 11.365 10.0208 11.679 9.43512 12.2483C8.84942 12.8176 8.51317 13.5958 8.5 14.4125V29.5875C8.51317 30.4042 8.84942 31.1824 9.43512 31.7517C10.0208 32.321 10.8083 32.635 11.625 32.625H30.375C31.1917 32.635 31.9792 32.321 32.5649 31.7517C33.1506 31.1824 33.4868 30.4042 33.5 29.5875V18.85C33.4868 18.0333 33.1506 17.2551 32.5649 16.6858C31.9792 16.1165 31.1917 15.8025 30.375 15.8125ZM31 29.5625C30.9953 29.6392 30.9753 29.7142 30.9411 29.783C30.9069 29.8518 30.8593 29.9131 30.801 29.9632C30.7427 30.0133 30.675 30.0512 30.6019 30.0747C30.5287 30.0982 30.4515 30.1068 30.375 30.1H11.625C11.5485 30.1068 11.4713 30.0982 11.3982 30.0747C11.325 30.0512 11.2573 30.0133 11.199 29.9632C11.1407 29.9131 11.0931 29.8518 11.0589 29.783C11.0247 29.7142 11.0047 29.6392 11 29.5625V14.4125C11.0047 14.3358 11.0247 14.2608 11.0589 14.192C11.0931 14.1231 11.1407 14.0619 11.199 14.0118C11.2573 13.9617 11.325 13.9237 11.3982 13.9002C11.4713 13.8767 11.5485 13.8682 11.625 13.875H16.7875L20.0375 17.85C20.1538 17.9934 20.3005 18.1092 20.4669 18.1892C20.6333 18.2692 20.8154 18.3113 21 18.3125H30.375C30.4515 18.3057 30.5287 18.3142 30.6019 18.3377C30.675 18.3612 30.7427 18.3992 30.801 18.4493C30.8593 18.4994 30.9069 18.5606 30.9411 18.6295C30.9753 18.6983 30.9953 18.7733 31 18.85V29.5625Z'
                            fill='white'
                            fillOpacity='0.38'
                          />
                        </svg>
                      </div>
                      <a className='newTools-item__link' href='#'>
                        Visit
                      </a>
                    </div>
                  </div>
                  <div className='newTools__item'>
                    <div className='newTools-item__header'>
                      <img src='public/jb_phpstorm.svg' alt='' />
                      <h2 className='newTools-item__title'>
                        PHPStorm <span>Free</span>
                      </h2>
                    </div>
                    <p className='newTools-item__text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className='newTools-item__footer'>
                      <div className='newTools-item__add'>
                        <svg
                          className='svg__heart'
                          width='42'
                          height='42'
                          viewBox='0 0 42 42'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='42' height='42' rx='8' fill='#1E252B' />
                          <path
                            d='M26.8333 12.25C24.3833 12.25 22.225 13.475 21 15.4C19.775 13.475 17.6167 12.25 15.1667 12.25C11.3167 12.25 8.16667 15.4 8.16667 19.25C8.16667 26.1917 21 33.25 21 33.25C21 33.25 33.8333 26.25 33.8333 19.25C33.8333 15.4 30.6833 12.25 26.8333 12.25Z'
                            fill='white'
                            fillOpacity='0.38'
                          />
                        </svg>
                        <svg
                          className='svg__folder'
                          width='42'
                          height='42'
                          viewBox='0 0 42 42'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='42' height='42' rx='8' fill='#1E252B' />
                          <path
                            d='M23.5 23.25H22.25V22C22.25 21.6685 22.1183 21.3505 21.8839 21.1161C21.6495 20.8817 21.3315 20.75 21 20.75C20.6685 20.75 20.3505 20.8817 20.1161 21.1161C19.8817 21.3505 19.75 21.6685 19.75 22V23.25H18.5C18.1685 23.25 17.8505 23.3817 17.6161 23.6161C17.3817 23.8505 17.25 24.1685 17.25 24.5C17.25 24.8315 17.3817 25.1495 17.6161 25.3839C17.8505 25.6183 18.1685 25.75 18.5 25.75H19.75V27C19.75 27.3315 19.8817 27.6495 20.1161 27.8839C20.3505 28.1183 20.6685 28.25 21 28.25C21.3315 28.25 21.6495 28.1183 21.8839 27.8839C22.1183 27.6495 22.25 27.3315 22.25 27V25.75H23.5C23.8315 25.75 24.1495 25.6183 24.3839 25.3839C24.6183 25.1495 24.75 24.8315 24.75 24.5C24.75 24.1685 24.6183 23.8505 24.3839 23.6161C24.1495 23.3817 23.8315 23.25 23.5 23.25Z'
                            fill='white'
                            fillOpacity='0.38'
                          />
                          <path
                            d='M30.375 15.8125H21.625L18.3375 11.8375C18.2212 11.6941 18.0745 11.5783 17.9081 11.4983C17.7417 11.4183 17.5596 11.3762 17.375 11.375H11.625C10.8083 11.365 10.0208 11.679 9.43512 12.2483C8.84942 12.8176 8.51317 13.5958 8.5 14.4125V29.5875C8.51317 30.4042 8.84942 31.1824 9.43512 31.7517C10.0208 32.321 10.8083 32.635 11.625 32.625H30.375C31.1917 32.635 31.9792 32.321 32.5649 31.7517C33.1506 31.1824 33.4868 30.4042 33.5 29.5875V18.85C33.4868 18.0333 33.1506 17.2551 32.5649 16.6858C31.9792 16.1165 31.1917 15.8025 30.375 15.8125ZM31 29.5625C30.9953 29.6392 30.9753 29.7142 30.9411 29.783C30.9069 29.8518 30.8593 29.9131 30.801 29.9632C30.7427 30.0133 30.675 30.0512 30.6019 30.0747C30.5287 30.0982 30.4515 30.1068 30.375 30.1H11.625C11.5485 30.1068 11.4713 30.0982 11.3982 30.0747C11.325 30.0512 11.2573 30.0133 11.199 29.9632C11.1407 29.9131 11.0931 29.8518 11.0589 29.783C11.0247 29.7142 11.0047 29.6392 11 29.5625V14.4125C11.0047 14.3358 11.0247 14.2608 11.0589 14.192C11.0931 14.1231 11.1407 14.0619 11.199 14.0118C11.2573 13.9617 11.325 13.9237 11.3982 13.9002C11.4713 13.8767 11.5485 13.8682 11.625 13.875H16.7875L20.0375 17.85C20.1538 17.9934 20.3005 18.1092 20.4669 18.1892C20.6333 18.2692 20.8154 18.3113 21 18.3125H30.375C30.4515 18.3057 30.5287 18.3142 30.6019 18.3377C30.675 18.3612 30.7427 18.3992 30.801 18.4493C30.8593 18.4994 30.9069 18.5606 30.9411 18.6295C30.9753 18.6983 30.9953 18.7733 31 18.85V29.5625Z'
                            fill='white'
                            fillOpacity='0.38'
                          />
                        </svg>
                      </div>
                      <a className='newTools-item__link' href='#'>
                        Visit
                      </a>
                    </div>
                  </div>
                  <div className='newTools__item'>
                    <div className='newTools-item__header'>
                      <img src='public/jb_toolbox_app.svg' alt='' />
                      <h2 className='newTools-item__title'>
                        Toolbox <span>Free</span>
                      </h2>
                    </div>
                    <p className='newTools-item__text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className='newTools-item__footer'>
                      <div className='newTools-item__add'>
                        {' '}
                        <svg
                          className='svg__heart'
                          width='42'
                          height='42'
                          viewBox='0 0 42 42'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='42' height='42' rx='8' fill='#1E252B' />
                          <path
                            d='M26.8333 12.25C24.3833 12.25 22.225 13.475 21 15.4C19.775 13.475 17.6167 12.25 15.1667 12.25C11.3167 12.25 8.16667 15.4 8.16667 19.25C8.16667 26.1917 21 33.25 21 33.25C21 33.25 33.8333 26.25 33.8333 19.25C33.8333 15.4 30.6833 12.25 26.8333 12.25Z'
                            fill='white'
                            fillOpacity='0.38'
                          />
                        </svg>
                        <svg
                          className='svg__folder'
                          width='42'
                          height='42'
                          viewBox='0 0 42 42'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='42' height='42' rx='8' fill='#1E252B' />
                          <path
                            d='M23.5 23.25H22.25V22C22.25 21.6685 22.1183 21.3505 21.8839 21.1161C21.6495 20.8817 21.3315 20.75 21 20.75C20.6685 20.75 20.3505 20.8817 20.1161 21.1161C19.8817 21.3505 19.75 21.6685 19.75 22V23.25H18.5C18.1685 23.25 17.8505 23.3817 17.6161 23.6161C17.3817 23.8505 17.25 24.1685 17.25 24.5C17.25 24.8315 17.3817 25.1495 17.6161 25.3839C17.8505 25.6183 18.1685 25.75 18.5 25.75H19.75V27C19.75 27.3315 19.8817 27.6495 20.1161 27.8839C20.3505 28.1183 20.6685 28.25 21 28.25C21.3315 28.25 21.6495 28.1183 21.8839 27.8839C22.1183 27.6495 22.25 27.3315 22.25 27V25.75H23.5C23.8315 25.75 24.1495 25.6183 24.3839 25.3839C24.6183 25.1495 24.75 24.8315 24.75 24.5C24.75 24.1685 24.6183 23.8505 24.3839 23.6161C24.1495 23.3817 23.8315 23.25 23.5 23.25Z'
                            fill='white'
                            fillOpacity='0.38'
                          />
                          <path
                            d='M30.375 15.8125H21.625L18.3375 11.8375C18.2212 11.6941 18.0745 11.5783 17.9081 11.4983C17.7417 11.4183 17.5596 11.3762 17.375 11.375H11.625C10.8083 11.365 10.0208 11.679 9.43512 12.2483C8.84942 12.8176 8.51317 13.5958 8.5 14.4125V29.5875C8.51317 30.4042 8.84942 31.1824 9.43512 31.7517C10.0208 32.321 10.8083 32.635 11.625 32.625H30.375C31.1917 32.635 31.9792 32.321 32.5649 31.7517C33.1506 31.1824 33.4868 30.4042 33.5 29.5875V18.85C33.4868 18.0333 33.1506 17.2551 32.5649 16.6858C31.9792 16.1165 31.1917 15.8025 30.375 15.8125ZM31 29.5625C30.9953 29.6392 30.9753 29.7142 30.9411 29.783C30.9069 29.8518 30.8593 29.9131 30.801 29.9632C30.7427 30.0133 30.675 30.0512 30.6019 30.0747C30.5287 30.0982 30.4515 30.1068 30.375 30.1H11.625C11.5485 30.1068 11.4713 30.0982 11.3982 30.0747C11.325 30.0512 11.2573 30.0133 11.199 29.9632C11.1407 29.9131 11.0931 29.8518 11.0589 29.783C11.0247 29.7142 11.0047 29.6392 11 29.5625V14.4125C11.0047 14.3358 11.0247 14.2608 11.0589 14.192C11.0931 14.1231 11.1407 14.0619 11.199 14.0118C11.2573 13.9617 11.325 13.9237 11.3982 13.9002C11.4713 13.8767 11.5485 13.8682 11.625 13.875H16.7875L20.0375 17.85C20.1538 17.9934 20.3005 18.1092 20.4669 18.1892C20.6333 18.2692 20.8154 18.3113 21 18.3125H30.375C30.4515 18.3057 30.5287 18.3142 30.6019 18.3377C30.675 18.3612 30.7427 18.3992 30.801 18.4493C30.8593 18.4994 30.9069 18.5606 30.9411 18.6295C30.9753 18.6983 30.9953 18.7733 31 18.85V29.5625Z'
                            fill='white'
                            fillOpacity='0.38'
                          />
                        </svg>
                      </div>
                      <a className='tools-item__link' href='#'>
                        Visit
                      </a>
                    </div>
                  </div>
                  <div className='newTools__item'>
                    <div className='newTools-item__header'>
                      <img src='public/procreate.svg' alt='' />
                      <h2 className='newTools-item__title'>
                        Procreate <span>Paid</span>
                      </h2>
                    </div>
                    <p className='newTools-item__text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className='newTools-item__footer'>
                      <div className='newTools-item__add'>
                        <svg
                          className='svg__heart'
                          width='42'
                          height='42'
                          viewBox='0 0 42 42'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='42' height='42' rx='8' fill='#1E252B' />
                          <path
                            d='M26.8333 12.25C24.3833 12.25 22.225 13.475 21 15.4C19.775 13.475 17.6167 12.25 15.1667 12.25C11.3167 12.25 8.16667 15.4 8.16667 19.25C8.16667 26.1917 21 33.25 21 33.25C21 33.25 33.8333 26.25 33.8333 19.25C33.8333 15.4 30.6833 12.25 26.8333 12.25Z'
                            fill='white'
                            fillOpacity='0.38'
                          />
                        </svg>
                        <svg
                          className='svg__folder'
                          width='42'
                          height='42'
                          viewBox='0 0 42 42'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='42' height='42' rx='8' fill='#1E252B' />
                          <path
                            d='M23.5 23.25H22.25V22C22.25 21.6685 22.1183 21.3505 21.8839 21.1161C21.6495 20.8817 21.3315 20.75 21 20.75C20.6685 20.75 20.3505 20.8817 20.1161 21.1161C19.8817 21.3505 19.75 21.6685 19.75 22V23.25H18.5C18.1685 23.25 17.8505 23.3817 17.6161 23.6161C17.3817 23.8505 17.25 24.1685 17.25 24.5C17.25 24.8315 17.3817 25.1495 17.6161 25.3839C17.8505 25.6183 18.1685 25.75 18.5 25.75H19.75V27C19.75 27.3315 19.8817 27.6495 20.1161 27.8839C20.3505 28.1183 20.6685 28.25 21 28.25C21.3315 28.25 21.6495 28.1183 21.8839 27.8839C22.1183 27.6495 22.25 27.3315 22.25 27V25.75H23.5C23.8315 25.75 24.1495 25.6183 24.3839 25.3839C24.6183 25.1495 24.75 24.8315 24.75 24.5C24.75 24.1685 24.6183 23.8505 24.3839 23.6161C24.1495 23.3817 23.8315 23.25 23.5 23.25Z'
                            fill='white'
                            fillOpacity='0.38'
                          />
                          <path
                            d='M30.375 15.8125H21.625L18.3375 11.8375C18.2212 11.6941 18.0745 11.5783 17.9081 11.4983C17.7417 11.4183 17.5596 11.3762 17.375 11.375H11.625C10.8083 11.365 10.0208 11.679 9.43512 12.2483C8.84942 12.8176 8.51317 13.5958 8.5 14.4125V29.5875C8.51317 30.4042 8.84942 31.1824 9.43512 31.7517C10.0208 32.321 10.8083 32.635 11.625 32.625H30.375C31.1917 32.635 31.9792 32.321 32.5649 31.7517C33.1506 31.1824 33.4868 30.4042 33.5 29.5875V18.85C33.4868 18.0333 33.1506 17.2551 32.5649 16.6858C31.9792 16.1165 31.1917 15.8025 30.375 15.8125ZM31 29.5625C30.9953 29.6392 30.9753 29.7142 30.9411 29.783C30.9069 29.8518 30.8593 29.9131 30.801 29.9632C30.7427 30.0133 30.675 30.0512 30.6019 30.0747C30.5287 30.0982 30.4515 30.1068 30.375 30.1H11.625C11.5485 30.1068 11.4713 30.0982 11.3982 30.0747C11.325 30.0512 11.2573 30.0133 11.199 29.9632C11.1407 29.9131 11.0931 29.8518 11.0589 29.783C11.0247 29.7142 11.0047 29.6392 11 29.5625V14.4125C11.0047 14.3358 11.0247 14.2608 11.0589 14.192C11.0931 14.1231 11.1407 14.0619 11.199 14.0118C11.2573 13.9617 11.325 13.9237 11.3982 13.9002C11.4713 13.8767 11.5485 13.8682 11.625 13.875H16.7875L20.0375 17.85C20.1538 17.9934 20.3005 18.1092 20.4669 18.1892C20.6333 18.2692 20.8154 18.3113 21 18.3125H30.375C30.4515 18.3057 30.5287 18.3142 30.6019 18.3377C30.675 18.3612 30.7427 18.3992 30.801 18.4493C30.8593 18.4994 30.9069 18.5606 30.9411 18.6295C30.9753 18.6983 30.9953 18.7733 31 18.85V29.5625Z'
                            fill='white'
                            fillOpacity='0.38'
                          />
                        </svg>
                      </div>
                      <a className='newTools-item__link' href='#'>
                        Visit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className='person'>
            <div className='container'>
              <div className='person__inner'>
                <img className='person-slider__prev' src='public/arrow-left.svg' alt='предыдущий' />
                <div className='person__slider swiper'>
                  <div className='person-slider__wrapper swiper-wrapper'>
                    <div className='person-slider swiper-slide'>
                      <picture>
                        <source srcSet='public/01.webp' type='image/webp' />
                        <img src='public/01.png' alt='Человек' />
                      </picture>
                      <div className='person-slider__content'>
                        <p>
                          Incididunt cillum do sint sint enim ullamco id deserunt mollit qui
                          reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit
                          labore occaecat do deserunt Lorem magna officia incididunt consectetur
                          amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute
                          officia excepteur non laboris id qui ad.
                        </p>
                      </div>
                    </div>
                    <div className='person-slider swiper-slide'>
                      <picture>
                        <source srcSet='public/01.webp' type='image/webp' />
                        <img src='public/01.png' alt='Человек' />
                      </picture>
                      <div className='person-slider__content'>
                        <p>
                          Incididunt cillum do sint sint enim ullamco id deserunt mollit qui
                          reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit
                          labore occaecat do deserunt Lorem magna officia incididunt consectetur
                          amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute
                          officia excepteur non laboris id qui ad.
                        </p>
                      </div>
                    </div>
                    <div className='person-slider swiper-slide'>
                      <picture>
                        <source srcSet='public/01.webp' type='image/webp' />
                        <img src='public/01.png' alt='Человек' />
                      </picture>
                      <div className='person-slider__content'>
                        <p>
                          Incididunt cillum do sint sint enim ullamco id deserunt mollit qui
                          reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit
                          labore occaecat do deserunt Lorem magna officia incididunt consectetur
                          amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute
                          officia excepteur non laboris id qui ad.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <img className='person-slider__next' src='public/arrow-right.svg' alt='Следующий' />
              </div>
              <div className='person-slider__pagination'></div>
            </div>
          </div>
          <section className='contributor'>
            <div className='container'>
              <div className='contributor__inner'>
                <h2 className='title contributor__title'>Become a contributor?</h2>
                <p className='contributor__text'>
                  Join us and get tips & tricks to become a great Designer and Developer
                </p>
                <form className='contributor__form form'>
                  <div className='form__input'>
                    <input type='email' placeholder='Enter your email...' />
                    <button className='btn form__btn'>Join Us</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className='footer'>
          <div className='container'>
            <div className='footer__inner'>
              <div className='footer__item'>
                <a className='logo' href='#'>
                  {' '}
                  <img src='public/logo.svg' alt='Лого' />
                </a>
                <h2 className='footer__right'>Copyright 2021. Antools</h2>
                <p className='footer__text'>
                  Antool is a web collection of information on paid or free Design and Development
                  tools
                </p>
              </div>
              <div className='footer__item'>
                <h2 className='footer__title'>Contact Us</h2>
                <ul className='footer__list'>
                  <li className='footer-list__item'>
                    {' '}
                    <a className='footer__link' href='tel:621987463'>
                      +621987463
                    </a>
                  </li>
                  <li className='footer-list__item'>M Building, No.10 A</li>
                  <li className='footer-list__item'>
                    {' '}
                    <a className='footer__link' href='mailto:antools@awesome.com'>
                      antools@awesome.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className='footer__item'>
                <h2 className='footer__title'>Categories</h2>
                <ul className='footer__list'>
                  <li className='footer-list__item'>
                    <a className='footer__link' href='#'>
                      Design
                    </a>
                  </li>
                  <li className='footer-list__item'>
                    <a className='footer__link' href='#'>
                      Development
                    </a>
                  </li>
                </ul>
              </div>
              <div className='footer__item'>
                <h2 className='footer__title'>Company Info</h2>
                <ul className='footer__list'>
                  <li className='footer-list__item'>
                    <a className='footer__link' href='#'>
                      About Us
                    </a>
                  </li>
                  <li className='footer-list__item'>
                    <a className='footer__link' href='#'>
                      Our Partners
                    </a>
                  </li>
                  <li className='footer-list__item'>
                    <a className='footer__link' href='#'>
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <script src='js/app.js?_v=20220204162059'> </script>
      </body>
    </Popover>
  )
}

export default App
