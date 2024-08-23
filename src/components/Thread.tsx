import styles from "../styles/Thread.module.css";

const Thread = ({ threads }: { threads: { id: string, title: string }[] }) => {
    return (
        <>
            <div className={styles.container}>
                <h1>新着スレッド</h1>

                <div className={styles.grid}>
                    {threads.map((thread) => (
                        <div key={thread.id} className={styles.block}>
                            <p>{thread.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Thread;
