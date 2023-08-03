import Layout from "@/src/layout/Layout";
import Link from "next/link";

import styles from './Performers.module.scss'
import HeaderProfile from "@/src/components/HeaderProfile/HeaderProfile";
import Raiting from "@/src/components/Raiting/Raiting";

import Image from "next/image";

import status from '/public/status.png'

const Performers = () => {
  return ( 
    <Layout>
      <div className={styles.performers}>
        <div className={styles.performers__title}>
            <h2>Пошив платья для официантов</h2>
            <div className={styles.performers__number}>№24500968</div>
        </div>
        <div className={styles.performers__header}>
          <HeaderProfile title="Поставка материала" number="1" href='/' active={true}/>
          <HeaderProfile title="Пошив изделия" number="2" href='/' active={false}/>
          <HeaderProfile title="Сдача заказа" number="3" href='/' active={false}/>
        </div>
        <div className={styles.performers__info}>
          <span>1 исполнитель:</span>
          <div className={styles.performers__infoButton}>
            <div className={styles.performers__infoItem}><Link href="/">Нанять еще</Link></div>
            <div className={styles.performers__infoItem}><Link href="/">Подобрать еще</Link></div>
          </div>
        </div>
        <div className={styles.performers__company}>
          <div className={styles.performers__body}>
            <div className={styles.performers__companyInfo}>
              <div className={styles.performers__logo}>Лого</div>
              <div className={styles.performers__companyContent}>
                <div className={styles.performers__name}>
                  <span>Название компании исполнителя</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58507 0.51936C8.64181 -0.17312 7.3582 -0.17312 6.41493 0.51936L5.48738 1.2003C5.33429 1.31269 5.1563 1.38642 4.96858 1.4152L3.8312 1.58958C2.67456 1.76691 1.76691 2.67456 1.58958 3.8312L1.4152 4.96858C1.38642 5.1563 1.31269 5.33429 1.2003 5.48738L0.51936 6.41493C-0.17312 7.3582 -0.17312 8.6418 0.51936 9.58507L1.2003 10.5126C1.31269 10.6657 1.38642 10.8437 1.4152 11.0314L1.58958 12.1688C1.76691 13.3254 2.67456 14.2331 3.8312 14.4104L4.96858 14.5848C5.1563 14.6136 5.33429 14.6873 5.48738 14.7997L6.41493 15.4806C7.3582 16.1731 8.6418 16.1731 9.58507 15.4806L10.5126 14.7997C10.6657 14.6873 10.8437 14.6136 11.0314 14.5848L12.1688 14.4104C13.3254 14.2331 14.2331 13.3254 14.4104 12.1688L14.5848 11.0314C14.6136 10.8437 14.6873 10.6657 14.7997 10.5126L15.4806 9.58507C16.1731 8.6418 16.1731 7.3582 15.4806 6.41493L14.7997 5.48738C14.6873 5.33429 14.6136 5.1563 14.5848 4.96858L14.4104 3.8312C14.2331 2.67456 13.3254 1.76691 12.1688 1.58958L11.0314 1.4152C10.8437 1.38642 10.6657 1.31269 10.5126 1.2003L9.58507 0.51936ZM7.3026 1.72851C7.71762 1.42383 8.28238 1.42383 8.6974 1.72851L9.62494 2.40945C9.9729 2.66489 10.3774 2.83246 10.8041 2.89787L11.9415 3.07225C12.4504 3.15027 12.8497 3.54962 12.9277 4.05852L13.1021 5.19589C13.1675 5.62256 13.3351 6.0271 13.5906 6.37506L14.2715 7.3026C14.5762 7.71762 14.5762 8.28238 14.2715 8.6974L13.5906 9.62494C13.3351 9.9729 13.1675 10.3774 13.1021 10.8041L12.9277 11.9415C12.8497 12.4504 12.4504 12.8497 11.9415 12.9277L10.8041 13.1021C10.3774 13.1675 9.9729 13.3351 9.62494 13.5906L8.6974 14.2715C8.28238 14.5762 7.71762 14.5762 7.3026 14.2715L6.37506 13.5906C6.0271 13.3351 5.62256 13.1675 5.19589 13.1021L4.05852 12.9277C3.54962 12.8497 3.15027 12.4504 3.07225 11.9415L2.89787 10.8041C2.83246 10.3774 2.66489 9.9729 2.40945 9.62494L1.72851 8.6974C1.42383 8.28238 1.42383 7.71762 1.72851 7.3026L2.40945 6.37505C2.66489 6.0271 2.83246 5.62256 2.89787 5.19589L3.07225 4.05852C3.15027 3.54962 3.54962 3.15027 4.05852 3.07225L5.19589 2.89787C5.62256 2.83246 6.0271 2.66489 6.37505 2.40945L7.3026 1.72851ZM11.2803 6.78033C11.5732 6.48744 11.5732 6.01256 11.2803 5.71967C10.9874 5.42678 10.5126 5.42678 10.2197 5.71967L7 8.93934L5.78033 7.71967C5.48744 7.42678 5.01256 7.42678 4.71967 7.71967C4.42678 8.01256 4.42678 8.48744 4.71967 8.78033L6.46967 10.5303C6.76256 10.8232 7.23744 10.8232 7.53033 10.5303L11.2803 6.78033Z" fill="#0036FF"/>
                  </svg>
                </div>
                <Raiting />
              </div>
            </div>
            <div className={styles.performers__companyButton}>
              <div className={styles.performers__companyItem}>
                <Link className={styles.performers__companyItem_red} href='/'>Найти замену</Link>
              </div>
              <div className={styles.performers__companyItem}>
                <Link href='/'>Подписать договор</Link>
              </div>
              <div className={styles.performers__companyItem}>
                <Link href='/'>Безопасная сделка</Link>
              </div>
              <div className={styles.performers__companyItem}>
                <Link className={styles.performers__companyItem_blue} href='/'>Написать</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.performers__status}>
          <div className={styles.performers__statusTitle}>Статус выполнения заказа</div>
          <div className={styles.performers__statusList}>
            <div className={styles.performers__statusItem}>
              <div className={styles.performers__statusBody}>
                <div className={styles.performers__statusIcon}>
                  <Image 
                    src={status}
                    width={150}
                    height={150}
                    />
                </div>
                <p className={styles.performers__statusDesc}>Подписание договора</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
   );
}
 
export default Performers;