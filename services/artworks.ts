import { useQuery } from '@tanstack/react-query'


const API = process.env.NEXT_PUBLIC_API_URL ?? false;

if (!API) {
  throw new Error(
    'Please define the NEXT_PUBLIC_API_URL environment variable inside .env'
  )
}

// QUERIES
//-------------------------------------------------------------------------------

const fetchArtworks = async (queryParamsString: string) => {
    try {
    const response = await fetch(`${API}/artworks?${queryParamsString}`);
    if (!response.ok) {
      throw new Error('Artworks response failed');
    }
    return response.json()
   } catch (error) {
    console.error(error);
    }
    return null;
  }


export const useArtworksQuery = (queryParams: {[key: string]: string}) => {
    const { q, fields, page, limit } = queryParams;
const queryParamsString = new URLSearchParams({
        q,
        fields,
        page,
        limit,
      }).toString();    
  return useQuery(['artworks', queryParams], () => fetchArtworks(queryParamsString));
}

//-------------------------------------------------------------------------------

const fetchArtworkDetail = async (id: string | null) => {
    if (!id) {
      return null;
    }
    try {
      const response = await fetch(`${API}/artworks/${id}`);
      if (!response.ok) {
        throw new Error('Artwork detail response failed');
      }
      return response.json()
     } catch (error) {
      console.error(error);
      }
      return null;
    }


export const useArtworkDetailsQuery = (id: string | null) => {
    return useQuery(['artwork-details', id], () => fetchArtworkDetail(id));
    }