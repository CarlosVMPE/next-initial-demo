import { FC, PropsWithChildren } from "react"

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(108,100,198,0.3)',
            borderRadius: '5px',
            padding: '10px',
        }}>
            <h3>Dark-Layout</h3>
            <div>
                {children}
            </div>
        </div>
    )
}
