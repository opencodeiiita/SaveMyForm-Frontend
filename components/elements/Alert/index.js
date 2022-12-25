import React from "react";
function alert(props) {
    return (
        <div
            id="alert-1"
            class="flex p-4 bg-yellow-300 dark:bg-yellow-200"
            role="alert"
        >
            <div class="ml-3 text-sm font-medium text-yellow-700 dark:text-yellow-800">
                <strong>Beta Alert</strong> SaveMyForm is still in beta phase,
                things may break, please handle us with care.
            </div>
            <button
                type="button"
                class="ml-auto -mx-1.5 -my-1.5 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 inline-flex h-8 w-8 dark:text-yellow-600 dark:hover:bg-yellow-300"
                data-dismiss-target="#alert-1"
                aria-label="Close"
            >
                <span class="sr-only">Close</span>
                <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </button>
        </div>
    );
}

export default alert;
