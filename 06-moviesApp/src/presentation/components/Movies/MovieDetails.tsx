/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {FullMovie} from '../../../core/entities/movieEntiti';
import {Formatter} from '../../../config/helpers/formatter';
import {Cast} from '../../../core/entities/castEntity';
import {FlatList} from 'react-native-gesture-handler';
import {CastActor} from '../Cast/CastActor';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{movie.rating}</Text>

          <Text style={{marginLeft: 5}}>{movie.genres.join(', ')}</Text>
        </View>

        <Text style={{fontSize: 23, fontWeight: 'bold'}}>Historia</Text>

        <Text style={{fontSize: 16}}>{movie.description}</Text>

        <Text style={{fontSize: 23, fontWeight: 'bold', marginTop: 10}}>
          Presupuesto
        </Text>

        <Text style={{fontSize: 16}}>{Formatter.currency(movie.budget)}</Text>
      </View>

      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: 'bold',
            marginHorizontal: 20,
            marginVertical: 10,
          }}>
          Actores
        </Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CastActor actor={item} />}
        />
      </View>
    </>
  );
};
