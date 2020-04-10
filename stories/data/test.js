import uid from 'nanoid'

const rootNodes = [
  {
    id: 12345678,
    parentId: null,
    label: "Allergies",
    items: [
      {

        "label": "Gluten-Free",
        "parentId": 12345678
      }, {

        "label": "Dairy Free",
        "parentId": 12345678
      }
    ]
  }, {
    id: 123456789,
    parentId: null,
    label: "Immune",
    items: [
      {
        id: 876543210,
        label: "Autoimmune",
        parentId: 123456789
      }, {
        id: 876543212,
        label: "Infection",
        parentId: 123456789
      }
    ]

  }
]



export const nodes = [...rootNodes]
