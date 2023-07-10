import { Rocket, Settings, Shield } from "lucide-react";
import { Notification } from "./Notification/Notification";
import { Mail } from "lucide-react";


export function Widget() {
    return(
        <div className="w-[448px] rounded overflow-hidden">
            <div className="bg-zinc-800 py-4 px-6 flex items-center justify-between">
                <span className="text-white font-bold">Notifications</span>
                <button className="text-violet-500 font-bold text-xs hover:text-violet-400">Mark all as read</button>
            </div>

            <div>
                <div className="text-zinc-400 bg-zinc-900 px-6">Recent</div> 
                <div className="divide-y-2 divide-zinc-950">
                    <Notification text={"You have received an invitation"} type={"Invitation"} icon={<Rocket className="w-6 h-6 text-violet-500 mt-4" />} />
                    <Notification text={"You have received an invitation"} type={"Invitation"} icon={<Mail className="w-6 h-6 text-green-400 mt-4" />} />
                    <Notification text={"You have received an invitation"} type={"Invitation"} icon={<Settings className="w-6 h-6 text-zinc-400 mt-4" />} />
                    <Notification text={"You have received an invitation"} type={"Invitation"} icon={<Shield className="w-6 h-6 text-yellow-500 mt-4" />} />
                </div>
            </div>
        </div>
    )
}