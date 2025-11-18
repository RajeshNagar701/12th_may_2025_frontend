import React from 'react'
import Func_props from './Func_props'
import Class_props from './Class_props'

function Main_props() {
  return (
    <div>
        <h1 className='m-5'>Function component call props </h1>
        <div className='row'>
            <Func_props title="De De Pyaar De 2" desc="In De De Pyaar De 2, love faces its toughest" img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/de-de-pyaar-de-2-et00391156-1760180159.jpg"/>
            <Func_props title="The Taj Story" desc="The Taj Story follows the life of Vishnu Das," img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-taj-story-et00467657-1762926201.jpg"/>
            <Func_props title="Ek Deewane Ki Deewaniyat" desc="Love. Obsession. Heartbreak..." img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ek-deewane-ki-deewaniyat-et00447585-1756106577.jpg"/>
            <Func_props title="Haq" desc="Inspired by the landmark Supreme Court judgement" img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/haq-et00464000-1762332432.jpg"/>
        </div>

        <h1 className='m-5'>Class component call props </h1>
        <div className='row'>
            <Class_props title="De De Pyaar De 2" desc="In De De Pyaar De 2, love faces its toughest" img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/de-de-pyaar-de-2-et00391156-1760180159.jpg"/>
            <Class_props title="The Taj Story" desc="The Taj Story follows the life of Vishnu Das," img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-taj-story-et00467657-1762926201.jpg"/>
            <Class_props title="Ek Deewane Ki Deewaniyat" desc="Love. Obsession. Heartbreak..." img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ek-deewane-ki-deewaniyat-et00447585-1756106577.jpg"/>
            <Class_props title="Haq" desc="Inspired by the landmark Supreme Court judgement" img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/haq-et00464000-1762332432.jpg"/>
        </div>
    </div>
  )
}

export default Main_props