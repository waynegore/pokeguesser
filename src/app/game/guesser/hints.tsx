import styles from './guesser.module.css';

export default function Hints(props: HintsProps) {
    function shouldShow(i: number) {
        const lastGuess = maxGuesses - 1 === guessCount;
        return lastGuess || i < guessCount;
    }

    const { hints, guessCount, maxGuesses } = props;
    return (
      <div className="mt-4">
          <span>Hints</span>
          {
              hints.map((hint, i) =>
                  <p key={i} className={styles.hint} style={{ opacity: shouldShow(i) ? 1 : 0 }}>
                      {hint}
                  </p>
              )
          }
      </div>
    );
}

export interface HintsProps {
    hints: string[];
    guessCount: number;
    maxGuesses: number;
}