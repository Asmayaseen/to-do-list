#!/usr/bin/env node
// shabang
import inquirer from "inquirer"

let todo_list: string[] = [];

let while_condition: boolean = true;

while (while_condition === true){

    // -------------------------0ptions-------------------------
    let option = await inquirer.prompt([{
        type: 'list',
        name:"user_option",
        message:'select an options',
        choices: ["Add","Remove"]
    }])

     // -------------------------Add-------------------------
          if(option.user_option === "Add"){
        let ans = await inquirer.prompt([{
            type: 'input',
            name: 'usr_ans',
            message:'write something to Add in the task list.'
        }])

        if (ans.user_ans !== ''){
            todo_list.push(ans.usr_ans );
            console.log( todo_list);
        }else{
            console.log('please write something to Add in the todo list');
        }
     }

     // -------------------------Remove-------------------------
     else if (option.user_option === "Remove"){
        let RemoveChoice = await inquirer.prompt([{
            type:'list',
            name: 'Remove_item',
            message: 'select item to Remove',
            choices: todo_list
        }]);

        let index_to_Remove = todo_list.indexOf(RemoveChoice.Remove_item);

        if  (index_to_Remove >= 0){
            todo_list.splice(index_to_Remove, 1);
            console.log('You Removed : ', RemoveChoice.Remove_item);
            console.log(todo_list);
        }
     }

     // -------------------------confirmation-------------------------
     let user_ans = await inquirer.prompt([{
        type: 'confirm',
        name: 'selection',
        message: 'Do you want to continue?',
        default: true

     }])

     if(user_ans.selection === false){
        while_condition = false;
     }  
} ;