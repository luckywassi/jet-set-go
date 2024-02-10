/**
 * @returns {[Data, Error]} 
 */
export async function getFlights() {
  try {
    const fetchRes = await fetch("https://api.npoint.io/4829d4ab0e96bfab50e7");
    const apiRes = await fetchRes.json();
    console.log("flights", apiRes)
    return [apiRes, null]
  } catch (error) {
    console.log("flights", error.message)
    return [null, error]
  }
}