import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import xml2js from 'xml2js'

import { OBJECT_STORE_ASSETS_URL, PHOTO_SIZE_PREFIXES } from '~/src/utilities/constants'

type PhotoSet = {
    small: string,
    medium: string,
    large: string,
}

type ObjectStoreListObjectsResponse = {
    ListBucketResult: {
        Contents: {
            Size: string[],
            Key: string[],
        }[]
    }
}

type PhotosState = {
    status: 'idle' | 'pending' | 'failed',
    photoSets: PhotoSet[],
}

const initialState: PhotosState = {
    status: 'idle',
    photoSets: [],
}

export const fetchPhotos = createAsyncThunk<PhotoSet[]>(
    'photos/fetchPhotos',
    async () => {
        const response = await fetch(
            `${OBJECT_STORE_ASSETS_URL}?prefix=photos/${PHOTO_SIZE_PREFIXES.SMALL}`
        )
        const jsonResponse = await xml2js.parseStringPromise(
            await response.text()
        ) as ObjectStoreListObjectsResponse
        return jsonResponse.ListBucketResult.Contents.map(
            (object) => object.Key[0]
        ).map(key => ({
            small: OBJECT_STORE_ASSETS_URL + key,
            medium: OBJECT_STORE_ASSETS_URL + key.replace(
                PHOTO_SIZE_PREFIXES.SMALL,
                PHOTO_SIZE_PREFIXES.MEDIUM
            ),
            large: OBJECT_STORE_ASSETS_URL + key.replace(
                PHOTO_SIZE_PREFIXES.SMALL,
                PHOTO_SIZE_PREFIXES.LARGE
            ),
        }))
    },
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
            state.photoSets = payload
        })
        builder.addCase(fetchPhotos.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export default photosSlice.reducer
