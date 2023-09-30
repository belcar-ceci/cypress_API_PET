class PetNameCounter {
  constructor(petData) {
    this.petData = petData;
  }

  countPetNames() {
    const nameCount = {};

    this.petData.forEach((pet) => {
      const name = pet.name;
      if (nameCount[name]) {
        nameCount[name]++;
      } else {
        nameCount[name] = 1;
      }
    });

    // Convierte el objeto de conteo en un array de objetos {nombre, cantidad}
    const nameCountArray = Object.keys(nameCount).map((name) => ({
      name: name,
      count: nameCount[name]
    }));

    return nameCountArray;
  }
}

// Ejemplo de uso con la estructura de datos que proporcionaste
const petData = [
  
    {
        "id": 20,
        "category": {
            "id": 2,
            "name": "blisa"
        },
        "name": "skiper",
        "photoUrls": [
            "url"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "sold"
    },
    {
        "id": 21,
        "category": {
            "id": 2,
            "name": "blisa"
        },
        "name": "skiper",
        "photoUrls": [
            "url"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "sold"
    },
    {
        "id": 22,
        "category": {
            "id": 2,
            "name": "cocoa"
        },
        "name": "skiper",
        "photoUrls": [
            "url"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "sold"
    },
    {
        "id": 23,
        "category": {
            "id": 2,
            "name": "cocoa"
        },
        "name": "skiper",
        "photoUrls": [
            "url"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "sold"
    }

];

const petNameCounter = new PetNameCounter(petData);
const nameCount = petNameCounter.countPetNames();

console.log(nameCount);