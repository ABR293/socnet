import React, {useState} from 'react';
import styles from "./Paginator.module.css";
import cn from "classnames";
import 'font-awesome/css/font-awesome.min.css';

type Props = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p:number) => void
    portionSize?: number 
} 

let Paginator :React.FC<Props> = (
        {   totalItemsCount,
            pageSize,
            currentPage,
            onPageChanged,
            portionSize = 10
        }
    ) => {

        let pagesCount = Math.ceil(totalItemsCount / pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    
        let portionCount = Math.ceil(pagesCount / portionSize);
        let [portionNumber, setPortionNumber] = useState(1);
        let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
        let rightPortionPageNumber = portionNumber * portionSize;


        return (
            <div className={styles.paginator}>
                <div className={styles.prev}>
                {portionNumber > 1
                    ?
                    <button className={styles.active}
                        onClick={() => {
                            setPortionNumber(portionNumber - 1)
                        }}> <i className="fa fa-chevron-left" aria-hidden="true"> </i>
                    </button>
                    :
                    <div><i className="fa fa-chevron-left" aria-hidden="true"> </i> </div>
                }
                </div>

                <div className={styles.items}>
                    {pages
                        .filter((p:number) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map((p) => {
                            return <span className={cn({
                                [styles.selectedPage]: currentPage === p
                            }, styles.pageNumber)}
                                        key={p}
                                        onClick={(e) => {
                                            onPageChanged(p);
                                        }}>{p}</span>
                        })}
                </div>
                <div className={styles.next}>
                {portionCount > portionNumber
                    ?
                    <button className={styles.active}
                        onClick={() => {
                            setPortionNumber(portionNumber + 1)
                        }}><i className="fa fa-chevron-right" aria-hidden="true"> </i>
                    </button>
                    :
                    <div><i className="fa fa-chevron-right" aria-hidden="true"> </i></div>
                }
                </div>
            </div>)
};

export default Paginator;