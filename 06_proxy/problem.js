const cache = {};

const fetchDataWithCache = (key) => {
  if (cache[key]) {
    console.log(`Returning cached data for key: ${key}`);
    return cache[key];
  }

  console.log(`Fetching data for key: ${key}`);
  const data = `Data for ${key}`;
  cache[key] = data;
  return data;
};

// Fetch data with cache
console.log(fetchDataWithCache("key1")); // Expected output: Fetching data for key: key1
console.log(fetchDataWithCache("key2")); // Expected output: Fetching data for key: key2

// Fetch data with cache (from cache)
console.log(fetchDataWithCache("key1")); // Expected output: Returning cached data for key: key1
console.log(fetchDataWithCache("key2")); // Expected output: Returning cached data for key: key2

// Fetch new data without cache
console.log(fetchDataWithCache("key3")); // Expected output: Fetching data for key: key3
