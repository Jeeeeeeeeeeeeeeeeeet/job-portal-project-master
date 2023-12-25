import jwtDecode from "jwt-decode";
import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import { IoReturnUpBack } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selectauthToken = (rootstate) => rootstate.authToken;

  const authToken = localStorage.getItem("token");

  const TokenNav = () => {
    return (
      
      <ul className="flex items-center ml-auto space-x-8 lg:flex">
        <li>
          <div className="max-sm:hidden font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
            <div className="group relative cursor-pointer py-2">
              <div className="flex items-center justify-between">
                <a className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                  Logged In
                </a>
              </div>
              <div className="floating-hover-block invisible absolute z-50 flex w-40 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-enabled:visible group-hover:visible">
                <a
                  href="/login-org"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Organization
                </a>
                <a
                  href="/login-job"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Job Seeker
                </a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="max-sm:hidden inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none mx-auto w-full">
            <div className="group relative cursor-pointer py-2">
              <div className="flex items-center justify-between">
                <a className="menu-hover my-2 py-2 text-base font-medium text-white lg:mx-1">
                  Sign Up
                </a>
              </div>
              <div className="floating-hover-block invisible absolute z-50 flex w-40 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a
                  href="/reg-organization"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Organization
                </a>
                <a
                  href="/reg-job"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Job Seeker
                </a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="ml-auto invisible max-sm:visible">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Job Portal
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <span class="font-medium text-gray-700">Login</span>
                        <hr />
                      </li>
                      <li>
                        <a
                          href="/login-org"
                          aria-label="Login as Organization"
                          title="Login as Organization"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Login as Organization
                        </a>
                      </li>
                      <li>
                        <a
                          href="/login-job"
                          aria-label="Login as Job Seeker"
                          title="Login as Job Seeker"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Login as Job Seeker
                        </a>
                      </li>
                      <li>
                        <span class="font-medium text-gray-700">Sign Up</span>
                        <hr />
                      </li>
                      <li>
                        <a
                          href="/login-org"
                          aria-label="Sign Up as Organization"
                          title="Sign Up as Organization"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Login as Organization
                        </a>
                      </li>
                      <li>
                        <a
                          href="/login-job"
                          aria-label="Sign Up as Job Seeker"
                          title="Sign Up as Job Seeker"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Login as Job Seeker
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </li>
      </ul>
    );
  };

  const WithoutTokenNav = () => {
    return (
      <ul className="flex items-center ml-auto space-x-8 lg:flex">
        <li>
          <div className="max-sm:hidden font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
            <div className="group relative cursor-pointer py-2">
              <div className="flex items-center justify-between">
                <a className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                  Login
                </a>
              </div>
              <div className="floating-hover-block invisible absolute z-50 flex w-40 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-enabled:visible group-hover:visible">
                <a
                  href="/login-org"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Organization
                </a>
                <a
                  href="/login-job"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Job Seeker
                </a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="max-sm:hidden inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none mx-auto w-full">
            <div className="group relative cursor-pointer py-2">
              <div className="flex items-center justify-between">
                <a className="menu-hover my-2 py-2 text-base font-medium text-white lg:mx-1">
                  Sign Up
                </a>
              </div>
              <div className="floating-hover-block invisible absolute z-50 flex w-40 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a
                  href="/reg-organization"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Organization
                </a>
                <a
                  href="/reg-job"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Job Seeker
                </a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="ml-auto invisible max-sm:visible">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Job Portal
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <span class="font-medium text-gray-700">Login</span>
                        <hr />
                      </li>
                      <li>
                        <a
                          href="/login-org"
                          aria-label="Login as Organization"
                          title="Login as Organization"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Login as Organization
                        </a>
                      </li>
                      <li>
                        <a
                          href="/login-job"
                          aria-label="Login as Job Seeker"
                          title="Login as Job Seeker"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Login as Job Seeker
                        </a>
                      </li>
                      <li>
                        <span class="font-medium text-gray-700">Sign Up</span>
                        <hr />
                      </li>
                      <li>
                        <a
                          href="/login-org"
                          aria-label="Sign Up as Organization"
                          title="Sign Up as Organization"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Login as Organization
                        </a>
                      </li>
                      <li>
                        <a
                          href="/login-job"
                          aria-label="Sign Up as Job Seeker"
                          title="Sign Up as Job Seeker"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Login as Job Seeker
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </li>
      </ul>
    );
  };

  return (
    <>
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
          <ul className="items-center hidden ml-20 space-x-8 lg:flex">
            <li>
              <a
                href="/appliedJobs"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 hover:text-teal-accent-400 hover:underline transition-all duration-200"
              >
                Applied Jobs
              </a>
            </li>
            {/* <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 hidden transition-colors duration-200 hover:text-teal-accent-400"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-100 hidden transition-colors duration-200 hover:text-teal-accent-400"
              >
                Pricing
              </a>
            </li> */}
          </ul>
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center lg:mx-auto"
          >
            <svg
              className="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              Job Portal
            </span>
          </a>
          {authToken &&
            (<TokenNav />)
          }
          {!authToken &&
            (<WithoutTokenNav />)
          }
        </div>
      </div>
    </div>
    </>
  );
};
