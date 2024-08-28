import Card from '@/components/card'
import { Ticket, TicketCheck, Archive, Hourglass } from 'lucide-react'
import React from 'react'
import DashboardRequestChart from './components/chart'
import DashboardPieChart from './components/pie-chart'

type Props = {}

export default function DashboardContainer({}: Props) {
  return (
    <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6">
            <Card noPadding={false}>
                <div className="flex align-center">
                    <Ticket size={44} className="-mt-4 text-red-500" />
                    <div className="m-auto">
                        <p className="text-gray-400 -mt-4">Total Request</p>
                        <p className="text-xl text-primary/60">---</p>
                    </div>
                </div>
            </Card>
        </div>
        <div className="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6">
            <Card noPadding={false}>
                <div className="flex align-center">
                    <TicketCheck size={44} className="-mt-4 text-red-500" />
                    <div className="m-auto">
                        <p className="text-gray-400 -mt-4">Done</p>
                        <p className="text-xl text-primary">---</p>
                    </div>
                </div>
            </Card>
        </div>
        <div className="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6">
            <Card noPadding={false}>
                <div className="flex align-center">
                    <Hourglass size={44} className="-mt-4 text-red-500" />
                    <div className="m-auto">
                        <p className="text-gray-400 -mt-4">Pending</p>
                        <p className="text-xl text-primary">---</p>
                    </div>
                </div>
            </Card>
        </div>
        <div className="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6">
            <Card noPadding={false}>
                <div className="flex align-center">
                    <Archive size={44} className="-mt-4 text-red-500" />
                    <div className="m-auto">
                        <p className="text-gray-400 -mt-4">Archived</p>
                        <p className="text-xl text-primary">---</p>
                    </div>
                </div>
            </Card>
        </div>
        <div className="col-span-12 xl:col-span-8 md:col-span-6">
            <Card cardHeader="This Year Requests" noPadding={false}>
                <DashboardRequestChart />
            </Card>
        </div>
        <div className="col-span-12 xl:col-span-4 md:col-span-6">
            <Card cardHeader="Request by Company" noPadding={false}>
                <DashboardPieChart />
            </Card>
        </div>
    </div>
  )
}