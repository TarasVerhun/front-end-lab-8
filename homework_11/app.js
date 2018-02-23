let rootNode = document.getElementById("root");

function drawTree(structure, parentUl){
    structure.forEach((el) => {
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let icon = document.createElement('i');
        icon.className = 'material-icons';
        icon.innerHTML = !el.folder ? 'insert_drive_file' : 'folder';
        h4.className = el.folder ?  'folder' : '';
        let span = document.createElement('span');
        span.innerHTML = el.title; 
        h4.appendChild(icon);
        h4.appendChild(span);
        li.appendChild(h4);
        parentUl.appendChild(li);
        if(!el.children && el.folder){
            let emptyUl = document.createElement('ul');
            let empty = document.createElement('li');
            let h4Empty = document.createElement('h4');
            h4Empty.style.fontStyle = 'italic';
            h4Empty.innerHTML = 'Folder is epmty';
            empty.appendChild(h4Empty);
            emptyUl.appendChild(empty);
            emptyUl.style.display = 'none';
            li.appendChild(emptyUl);            
        }
        if(el.children){
            let childUl = document.createElement('ul');
            childUl.style.display = 'none';
            li.appendChild(childUl);
            drawTree(el.children, childUl);
        }
    })
}

let folders = document.querySelectorAll('.folder');
for(let i = 0; i< folders.length;i++){
    folders[i].addEventListener('click', toggle, false);
}

function toggle(event){
    let icon = this.children[0].innerHTML;
    this.children[0].innerHTML = icon == 'folder_open' ? 'folder' : 'folder_open';
    let folderDisplay = this.nextElementSibling.style.display;
    this.nextElementSibling.style.display = folderDisplay == 'block' ? 'none' : 'block';
}

let TreeView = document.createElement('div');
let mainUl = document.createElement('ul');
TreeView.appendChild(mainUl);
drawTree(structure, mainUl);

rootNode.appendChild(TreeView);
