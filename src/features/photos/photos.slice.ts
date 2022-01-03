import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import xml2js from 'xml2js'

import { OBJECT_STORE_ASSETS_URL } from '~/src/utilities/constants'

type PhotosState = {
    status: 'idle' | 'pending' | 'failed',
    photoKeys: string[],
}

type ObjectStoreListObjectsResponse = {
    ListBucketResult: {
        Contents: {
            Size: string[],
            Key: string[],
        }[]
    }
}

const initialState: PhotosState = {
    status: 'idle',
    photoKeys: [],
}

export const fetchPhotos = createAsyncThunk<string[]>(
    'photos/fetchPhotos',
    async () => {
        const response = await fetch(`${OBJECT_STORE_ASSETS_URL}?prefix=photos/`)
        const jsonResponse = await xml2js.parseStringPromise(
            await response.text()
        ) as ObjectStoreListObjectsResponse
        return jsonResponse.ListBucketResult.Contents.filter(
            (object) => parseInt(object.Size[0], 10) > 0
        ).map(
            (object) => object.Key[0]
        )
    }
)

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPhotos.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(fetchPhotos.fulfilled, (state, { payload }) => {
            state.status = 'idle'
            state.photoKeys = payload
        })
        builder.addCase(fetchPhotos.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export default photosSlice.reducer
