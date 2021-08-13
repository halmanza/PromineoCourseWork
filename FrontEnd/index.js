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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(EntryMaker),
      });
      return createData;
    } catch (err) {
      console.error(err);
    }
  }

  static async getAllEntries() {
    const data = await fetch(this.uRL);

    return await data.json();
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
    const newCopy= {...EntryMaker}
    delete newCopy._id;
    try {
      const data = await fetch(this.uRL + "/" + EntryMaker._id, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCopy),
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
    EntryService.getAllEntries().then((entries) => {
      this.render(entries);
    });
  }

  static addEntry(name) {
    EntryService.createPost(new EntryMaker(name))
      .then(() => {
        return EntryService.getAllEntries();
      })
      .then((entries) => this.render(entries));
  }

  static addSubEntry(id) {
    for (let entry of this.entries) {
      if (entry._id == id) {
        entry.entries.push(
          new Entry(
            $(`#${entry._id}-entry-name`).val(),
            $(`#${entry._id}-entry-area`).val()
          )
        );
        console.log(entry.entries[0]);
        EntryService.updateEntry(entry)
          .then(() => {
            return EntryService.getAllEntries();
          })
          .then((entries) => this.render(entries));
      }
    }
  }

  static deleteDOMEntry(id) {
    EntryService.deleteEntry(id)
      .then(() => {
        return EntryService.getAllEntries();
      })
      .then((entries) => this.render(entries));
  }

  static deleteSubEntry(entryId,postTitle){
    for(let entry of this.entries){
      if(entry._id == entryId){
        for(let post of entry.entries ){
          if(post.title == postTitle){
            entry.entries.splice(entry.entries.indexOf(post),1);
            EntryService.updateEntry(entry)
            .then(()=>{
              return EntryService.getAllEntries();
            }).then((entries)=> this.render(entries));
          }
        }
      }
    }
  }
  static render(entries) {
    this.entries = entries;
    
    $("#App").empty();
    for (let entry of entries) {
      $("#App").prepend(
        `
        <div id="${entry._id}" class="card">
        <div class="card-header">
          <h2> ${entry.name}</h2>
            <button class= "btn btn-danger" onclick="DOMManager.deleteDOMEntry('${entry._id}') ">Delete</button>
          </div>
          
          <div class="card-body">
            <div class="card">
              <div class="row">
                <div class="col-sm">
                <input type="text" id="${entry._id}-entry-name" class="form-control" placeholder="Entry title">
                </div>
                <div class="col-sm">
                <input type="text" id="${entry._id}-entry-area" class="form-control" placeholder="Entry body">
                </div>
              </div>
              <br/>
              <button id="${entry._id}-new-entry" onclick="DOMManager.addSubEntry('${entry._id}')" class="btn btn-primary">Add
              </button>
            </div>
          
          </div>
          </div><br/>
        `
      );
      for (let post of entry.entries) {
        
        $(`#${entry._id}`)
          .find(".card-body")
          .append(
            `<br/><p>
            <span id="name-${post._id}"><strong> Title: </strong> ${post.title}</span><br/>
            <span id="name-${post._id}"><strong> Body: </strong> ${post.body}</span>
            <br/>
            <button class="btn btn-danger"  onclick="DOMManager.deleteSubEntry('${entry._id}','${post.title}')">Delete</button>
          </p>`
          );
      }
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

DOMManager.getAllEntries();

getId("entryCreate").addEventListener("click", () => {
  DOMManager.addEntry(getId("createNewEntry").value);
});
