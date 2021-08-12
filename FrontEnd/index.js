class EntryMaker {
  constructor(name) {
    this.name = name;
    this.entries = [];
  }

  addEntry(title, body) {
    this.entries.push(new Entry(title, body));
  }
}

class Entry {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
}

class EntryService {
  static uRL =
    "https://crudcrud.com/api/6b7c5548b61f4ad4845c5d1ab0cc3eb7/Posts";

  static async createPost(EntryMaker) {
    try {
      const createData = await fetch(this.uRL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(EntryMaker),
      });

      if (createData.ok) {
        console.log("success");
      }
    } catch (err) {
      console.error(err);
    }
  }

  static async getAllEntries() {
    const data = await fetch(this.uRL);
    
    return await data.json()
  }

  static async getEntry(id) {
    try {
      const getData = await fetch(this.uRL + id);
      const valueData = await getData.json();
      return valueData;
    } catch (err) {
      console.error(err);
    }
  }

  static async updateEntry(EntryMaker) {
    try {
      const data = await fetch(this.uRL + "/" + EntryMaker._id, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(house),
      });
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  static async deleteEntry(id) {
    const deleteData = await fetch(this.uRL + `/${id}`, {
      method: "DELETE",
      mode: "cors",
    });
    return deleteData;
  }
}

class DOMManager {
  static entries;

  static getAllEntries() {
    EntryService.getAllEntries().then(entries=>{ this.render(entries)})
  }

  static render(entries) {
    this.entries = entries;
   
    $('#App').empty()
    for (let entry of entries) {
      $('#App').prepend(
        `
        <div id="${entry.id}" class="card">
        <div class="card-header">
          <h2> ${entry.name}</h2>
          <button class="btn btn-danger" onclick="DOMManager.delete('${entry._id}')">Delete</button>
          </div>
          
          <div class="card-body">
            <div class="card">
              <div class="row">
                <div class="col-sm">
                <input type="text" id="${entry._id}-entry-title" class="form-control" placeholder="Entry title">
                </div>
                <div class="col-sm">
                <input type="text" id="${entry._id}-entry-body" class="form-control" placeholder="Entry body">
                </div>
              </div>
              <br/>
              <button id="${entry._id}-new-entry" onclick="DOMManager.addEntry('${entry._id}')" class="btn btn-primary">Add
              </button>
            </div>
          
          </div>
          </div>
        `
      );
    }
  }
  
}

function getId(id) {
  return document.getElementById(id);
}

async function execute(data) {
  const val = await data;
  val.filter((item) => {
    console.log(item);
  });
}

// getId("entryCreate").addEventListener("click", () => {
//   EntryService.createPost(new EntryMaker("Blog"));
// });

// execute(EntryService.getAllEntries());
// // EntryService.deleteEntry('61143418dc46c203e8b3b3ed');

DOMManager.getAllEntries()