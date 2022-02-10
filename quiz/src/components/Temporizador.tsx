import styles from '../styles/Temporizador.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

interface TemporizadorProps {
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    const dur = props.duracao

    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={dur} 
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#BCE596', '#F7B801', '#D11C0F', '#D11C0F']}
                colorsTime={[(dur * 0.7), (dur * 0.5), (dur * 0.2), 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}