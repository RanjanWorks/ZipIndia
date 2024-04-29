# ZipIndia

ZipIndia is a Python library for retrieving location details from Indian postal codes (PIN codes). It provides a simple interface to fetch information such as state, district, and locality based on a given PIN code.

## Features

- Retrieve location details (state, district, locality) based on Indian PIN codes.
- Simple and easy-to-use API.
- Data sourced from reputable government databases for accuracy.

## Installation

You can install ZipIndia via pip:

```bash
pip install zipindia
```

## Usage

Here's a quick example of how to use ZipIndia:

```python
from zipindia import ZipIndia

# Initialize ZipIndia
zip_india = ZipIndia()

# Retrieve location details for a PIN code
location = zip_india.get_location("110001")
print(location)
```

Output:
```
{
    'state': 'Delhi',
    'district': 'Central Delhi',
    'locality': 'Baroda House'
}
```

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Data sourced from [India Post](https://www.indiapost.gov.in/)
- Built with [Next.js](https://nextjs.org/)
