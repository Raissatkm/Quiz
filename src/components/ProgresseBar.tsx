
import { motion } from "motion/react";

interface ProgresseBarProps {
    current: number;
    total: number;

}

export function ProgresseBarProps({ current, total }: ProgresseBarProps) {
    const percentage = (current / total) * 100;

    return (
        <div className="w-full mb-8">
            <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
                <span>Question {current} of {total}</span>
                <span>{Math.round(percentage)}%</span>
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-indigo-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />
                </div>
            </div>
        </div>
    )
}
