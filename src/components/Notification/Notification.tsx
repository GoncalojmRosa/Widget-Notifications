import { Rocket } from "lucide-react";
import { ReactNode } from "react";


interface NotificationProps{
    icon: ReactNode
    text: String
    type: String
}

export function Notification({text, type, icon}: NotificationProps){
    return(
        <div className="bg-zinc-800 px-8 py-4 flex items-start gap-6">
            {icon}
            <div className="flex-1 flex flex-col gap-2">
                <p className="text-sm leading-relaxed text-zinc-100">
                    {text}
                </p>
                <div className="text-xxs flex items-center text-zinc-400 gap-1">
                    <span>{type}</span>
                    <span>4 min ago!</span>
                </div>
            </div>
        </div> 
    )
}