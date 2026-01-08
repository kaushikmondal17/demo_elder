import React from 'react'
// import '.App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Header = () => {
  return (
    <div>

 

<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 sm:py-0 dark:bg-neutral-900">
  <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8">
    <div className="relative sm:flex sm:items-center">
      <div className="flex items-center justify-between">
        <a className="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white" href="#" aria-label="Brand">Brand</a>
        <div className="sm:hidden">
          <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-basic-usage-collapse" aria-expanded="false" aria-controls="hs-navbar-basic-usage" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-basic-usage">
            <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
      </div>

      <div id="hs-navbar-basic-usage" className="hidden hs-collapse sm:overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-basic-usage-collapse">
        <div className="flex flex-col gap-y-3 sm:gap-y-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          <a className="sm:p-2 font-medium text-blue-500 focus:outline-hidden" href="#" aria-current="page">Active</a>

          <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover] [--auto-close:inside] [--is-collapse:true] sm:[--is-collapse:false] ">
            <button id="hs-mega-menu" type="button" className="hs-dropdown-toggle sm:p-2 flex items-center w-full text-gray-600 font-medium hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
              Mega Menu
              <svg className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-auto sm:ms-2 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>

            <div className="hs-dropdown-menu sm:transition-[opacity,margin] sm:ease-in-out sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10  top-full start-0 min-w-60 bg-white sm:shadow-md rounded-lg py-2 sm:px-2 dark:bg-transparent sm:dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute" role="menu" aria-orientation="vertical" aria-labelledby="hs-mega-menu">
              <div className="flex flex-col sm:flex-row">
                <select id="hs-catalog-sidebar-nav-select" className="hidden" data-hs-select='{
                  "placeholder": "Select option...",
                  "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><span className=\"me-2\" data-icon></span><span className=\"flex-1 text-gray-800 hover:text-gray-400 focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500\" data-title></span></button>",
                  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative pe-7 flex items-center text-nowrap w-full cursor-pointer text-gray-800 text-start text-sm dark:text-neutral-200",
                  "wrapperClasses": "sm:hidden mb-2",
                  "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                  "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1 px-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                  "optionTemplate": "<div className=\"flex items-center\"><div className=\"me-3\" data-icon></div><div className=\"text-gray-800 dark:text-neutral-200 \" data-title></div></div>",
                  "extraMarkup": "<div className=\"absolute top-1/2 end-0 -translate-y-1/2\"><svg className=\"shrink-0 size-4 text-gray-500 dark:text-neutral-500 \" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"m6 9 6 6 6-6\"/></svg></div>"
                }'>
                  <option value="#mega-menu-tab-1" data-hs-select-option='{
                  }' selected>Tab 1</option>
                  <option value="#mega-menu-tab-2" data-hs-select-option='{
                  }'>Tab 2</option>
                  <option value="#mega-menu-tab-3" data-hs-select-option='{
                  }'>Tab 3</option>
                  <option value="#mega-menu-tab-4" data-hs-select-option='{
                  }'>Tab 4</option>
                  <option value="#mega-menu-tab-5" data-hs-select-option='{
                  }'>Tab 5</option>
                  <option value="#mega-menu-tab-6" data-hs-select-option='{
                  }'>Tab 6</option>
                  <option value="#mega-menu-tab-7" data-hs-select-option='{
                  }'>Tab 7</option>
                </select>

                <div className="hidden sm:block border-e border-gray-200 dark:border-neutral-700">
                  <nav className="flex flex-col space-y-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal" data-hs-tabs='{
                    "eventType": "hover",
                    "preventNavigationResolution": "sm"
                    }' data-hs-tab-select="#hs-catalog-sidebar-nav-select">
                    <a href="#" className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active" id="mega-menu-tab-item-1" aria-selected="true" data-hs-tab="#mega-menu-tab-1" aria-controls="mega-menu-tab-1">
                      Tab 1
                    </a>
                    <a href="#" className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500" id="mega-menu-tab-item-2" aria-selected="false" data-hs-tab="#mega-menu-tab-2" aria-controls="mega-menu-tab-2">
                      Tab 2
                    </a>
                    <a href="#" className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500" id="mega-menu-tab-item-3" aria-selected="false" data-hs-tab="#mega-menu-tab-3" aria-controls="mega-menu-tab-3">
                      Tab 3
                    </a>
                    <a href="#" className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500" id="mega-menu-tab-item-4" aria-selected="false" data-hs-tab="#mega-menu-tab-4" aria-controls="mega-menu-tab-4">
                      Tab 4
                    </a>
                    <a href="#" className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500" id="mega-menu-tab-item-5" aria-selected="false" data-hs-tab="#mega-menu-tab-5" aria-controls="mega-menu-tab-5">
                      Tab 5
                    </a>
                    <a href="#" className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500" id="mega-menu-tab-item-6" aria-selected="false" data-hs-tab="#mega-menu-tab-6" aria-controls="mega-menu-tab-6">
                      Tab 6
                    </a>
                    <a href="#" className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500" id="mega-menu-tab-item-7" aria-selected="false" data-hs-tab="#mega-menu-tab-7" aria-controls="mega-menu-tab-7">
                      Tab 7
                    </a>
                  </nav>
                </div>

                <div className="sm:ms-3 p-3 sm:p-0 border border-gray-200 sm:border-transparent rounded-lg dark:border-neutral-700 sm:dark:border-transparent">
                  <div id="mega-menu-tab-1" role="tabpanel" aria-labelledby="mega-menu-tab-item-1">
                    <p className="text-gray-500 dark:text-neutral-400">
                      This is the <em className="font-semibold text-gray-800 dark:text-neutral-200">first</em> item's tab body.
                    </p>
                  </div>
                  <div id="mega-menu-tab-2" className="hidden" role="tabpanel" aria-labelledby="mega-menu-tab-item-2">
                    <p className="text-gray-500 dark:text-neutral-400">
                      This is the <em className="font-semibold text-gray-800 dark:text-neutral-200">second</em> item's tab body.
                    </p>
                  </div>
                  <div id="mega-menu-tab-3" className="hidden" role="tabpanel" aria-labelledby="mega-menu-tab-item-3">
                    <p className="text-gray-500 dark:text-neutral-400">
                      This is the <em className="font-semibold text-gray-800 dark:text-neutral-200">third</em> item's tab body.
                    </p>
                  </div>
                  <div id="mega-menu-tab-4" className="hidden" role="tabpanel" aria-labelledby="mega-menu-tab-item-4">
                    <p className="text-gray-500 dark:text-neutral-400">
                      This is the <em className="font-semibold text-gray-800 dark:text-neutral-200">fourth</em> item's tab body.
                    </p>
                  </div>
                  <div id="mega-menu-tab-5" className="hidden" role="tabpanel" aria-labelledby="mega-menu-tab-item-5">
                    <p className="text-gray-500 dark:text-neutral-400">
                      This is the <em className="font-semibold text-gray-800 dark:text-neutral-200">fifth</em> item's tab body.
                    </p>
                  </div>
                  <div id="mega-menu-tab-6" className="hidden" role="tabpanel" aria-labelledby="mega-menu-tab-item-6">
                    <p className="text-gray-500 dark:text-neutral-400">
                      This is the <em className="font-semibold text-gray-800 dark:text-neutral-200">sixth</em> item's tab body.
                    </p>
                  </div>
                  <div id="mega-menu-tab-7" className="hidden" role="tabpanel" aria-labelledby="mega-menu-tab-item-7">
                    <p className="text-gray-500 dark:text-neutral-400">
                      This is the <em className="font-semibold text-gray-800 dark:text-neutral-200">seventh</em> item's tab body.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a className="sm:p-2 font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Project</a>
          
        </div>
      </div>
    </div>
  </nav>
</header>


    </div>
  )
};

export default Header
