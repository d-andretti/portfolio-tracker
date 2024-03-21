import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Instrument</td>
            <td>Ticker</td>
            <td>Type</td>
            <td>Volume</td>
            <td>Cost</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/bitcoin.png"
                  alt="instrument icon"
                  width={40}
                  height={40}
                  className={styles.instrumentIcon}
                />
                Bitcoin
              </div>
            </td>
            <td>BTC</td>
            <td>Crypto</td>
            <td>0.00512</td>
            <td>£250.00</td>
            <td>14 Mar 2024, 06:12</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/tesla.png"
                  alt="instrument icon"
                  width={40}
                  height={40}
                  className={styles.instrumentIcon}
                />
                Tesla
              </div>
            </td>
            <td>TSLA</td>
            <td>Stock</td>
            <td>3.2</td>
            <td>£506.45</td>
            <td>13 Jan 2024, 14:14</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/pound-sterling.png"
                  alt="instrument icon"
                  width={40}
                  height={40}
                  className={styles.instrumentIcon}
                />
                Pounds
              </div>
            </td>
            <td>GBP</td>
            <td>Cash</td>
            <td>1000</td>
            <td>£1000.00</td>
            <td>1 Dec 2023, 09:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
