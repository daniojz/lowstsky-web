import Header from '../views/Header/Header'
import TypeBeatsList from '../views/TypeBeatsList/TypeBeatsList'

const TypeBeats = () => {
  return (
    <>
      <section id='typeBeatsHeaderSection' className='typeBeatsHeaderSection'>
        <Header></Header>
      </section>
      <section id='typeBeatsListSection' className='typeBeatsListSection'>
        <TypeBeatsList></TypeBeatsList>
      </section>
    </>
  )
}

export default TypeBeats
