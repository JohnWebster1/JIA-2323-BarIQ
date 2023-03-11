import Head from 'next/head'
import {useEffect, useState} from "react";
import {initFirebase} from "../util/firebaseApp";
import { getAuth } from "firebase/auth";
import {useRouter} from "next/router";
import Navbar from "./Navbar";
import Centered from "./Centered";
import {useAuthState} from "react-firebase-hooks/auth";
import {getArticles} from "../util/getArticles";



export default function Home() {
    return (
    <div>
        {/* Home section 1 */}
        <section class="text-gray-600 body-font">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Featured
            </h1>
            <div class="container px-5 py-15 mx-auto">
                <div class="flex flex-wrap -mx-4 -my-8">
                <div class="py-8 px-4 lg:w-1/3">
                    <div class="h-full flex items-start">
                    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                        <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                        <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div>
                    <div class="flex-grow pl-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
                        <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Article 1</h1>
                        <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                        <a class="inline-flex items-center">
                        {/* <img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/> */}
                        <span class="flex-grow flex flex-col pl-3">
                            <span class="title-font font-medium text-gray-900">Alper Kamu</span>
                        </span>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="py-8 px-4 lg:w-1/3">
                    <div class="h-full flex items-start">
                    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                        <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                        <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div>
                    <div class="flex-grow pl-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
                        <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Article 2</h1>
                        <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                        <a class="inline-flex items-center">
                        {/* <img alt="blog" src="https://dummyimage.com/102x102" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/> */}
                        <span class="flex-grow flex flex-col pl-3">
                            <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
                        </span>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="py-8 px-4 lg:w-1/3">
                    <div class="h-full flex items-start">
                    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                        <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                        <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div>
                    <div class="flex-grow pl-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
                        <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Article 3</h1>
                        <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                        <a class="inline-flex items-center">
                        {/* <img alt="blog" src="https://dummyimage.com/101x101" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/> */}
                        <span class="flex-grow flex flex-col pl-3">
                            <span class="title-font font-medium text-gray-900">Henry Letham</span>
                        </span>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        {/* Home Section 2*/}
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Explore
                <br class="hidden sm:block"/>
                </h1>
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div class="p-4 md:w-1/3 flex">
                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100S text-indigo-500 mb-4 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                    </div>
                    <div class="flex-grow pl-6">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">ROI Calculator</h2>
                    <p class="leading-relaxed text-base">I'm a paragraph. Click here to add your own text and edit me. It's easy. I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                    <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <div class="p-4 md:w-1/3 flex">
                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                    </div>
                    <div class="flex-grow pl-6">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Generate Floor Plans</h2>
                    <p class="leading-relaxed text-base">I'm a paragraph. Click here to add your own text and edit me. It's easy. I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                    <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <div class="p-4 md:w-1/3 flex">
                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                    </div>
                    <div class="flex-grow pl-6">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Find Suppliers</h2>
                    <p class="leading-relaxed text-base">I'm a paragraph. Click here to add your own text and edit me. It's easy. I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                    <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </section>

    </div>)
}

