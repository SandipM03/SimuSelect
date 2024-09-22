"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function AddNewInterview() {
    const [openDailog,setOpenDailog]=useState(false)
  return (
    <div>
        <div className='p-10 border rounded-lg bg-secondary
        hover:scale-105 hover:shadow-md cursor-pointer transition-all'
        onClick={()=>setOpenDailog(true)}
        >
            <h2 className=' text-lg text-center'>+ add New</h2>
        </div>
        <Dialog open={openDailog}>
       
        <DialogContent className="max-w-2xl">
            <DialogHeader>
            <DialogTitle className='font-bold text-2xl'>Enter the Details</DialogTitle>
            <DialogDescription>
                <div> 
                    <h2>Add details about your job description, skill set, and years of experience.</h2>
                    <div className='mt-7 my-3'>
                        <label>Job Role/Job Position</label>
                        <Input placeholder="Junior Research Fellow (JRF)" />
                    </div>

                    <div className=' my-3'>
                        <label>Job Description/(In Short)</label>
                        <Textarea placeholder="" />
                    </div>

                    <div className='mt-7 my-3'>
                        <label>Years of experience</label>
                        <Input placeholder="Ex.5" type="number" />
                    </div>
                </div>
                <div className='flex gap-5 justify-end'>
                    <Button type="button" variant="ghost" onClick={()=>setOpenDailog(false)
                    }>Cancel </Button>
                    <Button type="button" >Start </Button>
                </div>
            </DialogDescription>

            </DialogHeader>
        </DialogContent>
        </Dialog>

    </div>
  )
}

export default AddNewInterview