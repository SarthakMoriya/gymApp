import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
const ExcerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([])

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDBUrl = `https://exercisedb.p.rapidapi.com`
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions)

      setExerciseDetail(exerciseDetailData)

      const exerciseVideoData = await fetch(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`, youtubeOptions)

      setExerciseVideo(exerciseVideoData)

    }
    fetchExerciseData();
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideo={exerciseVideo}/>
      <SimilarExercises />

    </Box>
  )
}

export default ExcerciseDetail