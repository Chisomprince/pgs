import React from 'react'


export default function Messaging() {
    return (
        <div className='divide-y p-4'>

            <div className=" sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6 mt-8 mb-10">
                    <div className="md:col-span-1">
                        <div className="px-4 ">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Messaging & post</h3>
                            <p className="mt-1 text-sm text-gray-600">Decide who can send you direct message and who can view your post</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <fieldset>
                                        <legend className="text-base font-medium text-gray-900">Messaging</legend>
                                        <div className="mt-4 space-y-4">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="comments"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="comments" className="font-medium text-gray-700">
                                                        followers
                          </label>
                                                    <p className="text-gray-500">Only your followers can send you direct messages</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="candidates"
                                                        name="candidates"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="candidates" className="font-medium text-gray-700">
                                                        EveryOne
                          </label>
                                                    <p className="text-gray-500">Every one on Alionzee can direct message you</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="offers"
                                                        name="offers"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="offers" className="font-medium text-gray-700">
                                                        Contacts
                          </label>
                                                    <p className="text-gray-500">Only my contact can direct message me.( chat only )</p>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div>
                                            <legend className="text-base font-medium text-gray-900">Posts</legend>
                                            <p className="text-sm text-gray-500">select who can view and those who cannot view your post</p>
                                        </div>
                                        <div className="mt-4 space-y-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="push_everything"
                                                    name="push_notifications"
                                                    type="radio"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                />
                                                <label htmlFor="push_everything" className="ml-3 block text-sm font-medium text-gray-700">
                                                    Everything
                        </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="push_email"
                                                    name="push_notifications"
                                                    type="radio"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                />
                                                <label htmlFor="push_email" className="ml-3 block text-sm font-medium text-gray-700">
                                                    only followers
                        </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="push_nothing"
                                                    name="push_notifications"
                                                    type="radio"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                />
                                                <label htmlFor="push_nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                                    Only in my country
                        </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                  </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
