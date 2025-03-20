import Image from "next/image";

export default function Home() {

    return (
        <section>
            <p className="font-bold">
                PokeGuesser
            </p>

            <p className="max-w-64">
                Prove that you&apos;re the ultimate pokemon master by correctly guessing the pokemon!
            </p>

            <div className="mt-2 flex gap-4 items-center">
                <a
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base gap-2 h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                    href="/game"
                >
                    <Image
                        src="/pokeball.svg"
                        alt="Pokeball icon"
                        width={20}
                        height={20}
                    />
                    Get started
                </a>
            </div>
        </section>
    );
}
