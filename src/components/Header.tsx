import styles from "../styles/Header.module.css";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <p>掲示板</p>

                <a href="#">スレッドをたてる</a>
            </header>
        </>
    );
};

export default Header;
