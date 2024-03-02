"use client";
import { useEffect, useState } from "react";
export default function Clock(){
    const [hour, setHour] = useState(new Date().getHours())
    useEffect(() => {
        const interval = setInterval(() => {
            setHour(new Date().getHours())
        }, 60000)

        return () => clearInterval(interval)
    }, [])
    return hour
}