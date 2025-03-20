import styles from "@/app/game/guesser/guesser.module.css";

export default function Indicator(props: IndicatorProps) {
    const { guesses, maxGuesses } = props;
    return (
        <ul className="flex">
            {[...Array(maxGuesses)].map((_, i) =>
                (<li key={i} className={`
                            ${guesses > i ? styles.negative : ''}
                            ${styles.guess_indicator}
                            inline-block
                        `}>
                </li>)
            )}
        </ul>
    )
}

export interface IndicatorProps {
    guesses: number;
    maxGuesses: number;
}