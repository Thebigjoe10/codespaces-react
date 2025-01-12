import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { updateClickValue } from '../../2.ReduxToolkit/Slice';


function CreateNotes() {

    const dispatch = useDispatch()
    const [onFocus, setOnFocus] = useState('')
    const [input1Value, setInput1Value] = useState('')

    const submit = (e) => {
        e.preventDefault()
        dispatch(updateClickValue(input1Value))
        // setInput1Value('')
    }

    return (
        <div onClick={(e) => { e.target.id == 'input1' || e.target.id == 'input2' ? setOnFocus(true) : setOnFocus(false) }} id='CreateNotes'
            className=' bg-white  w-full  '>
            <form onSubmit={submit}>
                <div className={`rounded-xl shadow-md border  justify-center 
                    sm:w-[75%] sm:m-auto
                    lg:w-[45%] lg:m-auto
                    // xl:w-[45%] xl:m-auto
                    w-[calc(100%-5rem)] ml-[4rem] mr-4
                    px-4 py-3
                `}>
                    <input
                        type="text"
                        id='input1'
                        placeholder='Title'
                        onFocus={() => { setOnFocus(true) }}
                        className='font-semibold overflow-auto placeholder:text-gray-700 outline-none w-full'
                        value={input1Value}
                        onChange={e => setInput1Value(e.target.value)}
                    />

                    <div className={`${onFocus == true ? 'block' : 'hidden'} `}>
                        <input type="text" id='input2' placeholder='Take a note...' className='my-4 font-sans overflow-auto placeholder:text-gray-600 outline-none w-full' />
                        <div className='flex items-center'>
                            <div className='mr-7'>
                                <Icon icon="bx:bell-plus" color='#4a5568' height={18} />
                            </div>
                            <div className='mr-7'>
                                <Icon icon="tabler:color-filter" color='#4a5568' height={18} />
                            </div>
                            <div className='mr-7'>
                                <Icon icon="fluent:image-24-regular" color='#4a5568' height={18} />
                            </div>
                            <div className='mr-7'>
                                <Icon icon="bi:archive" color='#4a5568' height={18} />
                            </div>
                            <div className='mr-7'>
                                <Icon icon="icon-park-outline:more-four" color='#4a5568' height={18} />
                            </div>
                            <div className=' w-[100%] flex justify-end'>
                                <button
                                    type='submit'
                                    className='bg-white font-semibold hover:bg-gray-100 rounded-md text-[#4a5568] px-2 '>Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default CreateNotes