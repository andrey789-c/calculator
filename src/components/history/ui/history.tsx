import { useAppSelector } from '../../../store/store'
import s from './history.module.scss'

export const History = () => {

  const {history} = useAppSelector(state => state.history)


  return <div className={s.history}>
    <div className={s.history__list}>
      {history.map((item, index) => <div key={index} className={s.history__item}>{item}</div>)}
    </div>
  </div>
}