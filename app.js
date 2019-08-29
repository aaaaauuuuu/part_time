// inputのvalueの変数
let tanpatu = 1;
let tanpatu_count = 0;
let dikker = 2;
let dikker_count = 0;
let rentCar = 3;
let rentCar_count = 0;


// お給料（1day）の変数
let partTime1 = 4050;
let total_partTime1 = 0;
let partTime2 = 5500;
let total_partTime2 = 0;
let partTime3 = 5700;
let total_partTime3 = 0;

// 合計の変数
let Total_result = 0;


// 出勤ボタンを押した時のイベント
$(function(){
    $('#btn').on('click', function(){
        console.log('hello World');
        let inputValue = $('#date').val();

        if(inputValue == 1) {
            for(let i = 1; i < 31; i++){
                tanpatu_count += parseFloat(i);
                $('.partTime1_result').html(tanpatu_count);
                total_partTime1 += parseFloat((partTime1)*i);
                $('#Yen1_result').html(total_partTime1);
    
                return i;
            }
    
        } else if(inputValue == 2) {
            for(let i = 1; i < 31; i++){
                dikker_count += parseFloat(i);
                $('.partTime2_result').html(dikker_count);
                total_partTime2 += parseFloat((partTime2)*i);
                $('#Yen2_result').html(total_partTime2);

                return i;
            }
        } else if(inputValue == 3){
            for(let i = 1; i < 31; i++){
                rentCar_count += parseFloat(i);
                $('.partTime3_result').html(rentCar_count);
                total_partTime3 += parseFloat((partTime3)*i);
                $('#Yen3_result').html(total_partTime3);
                return i;
            }
        }

        $('#date').val('');

    })

    // 合計ボタンを押した時のイベント
    $('#total_btn').on('click', function(){


            if(total_partTime1 != '' && total_partTime2 != '' && total_partTime3 != ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result);

            } else if(total_partTime1 == '' && total_partTime2 != '' && total_partTime3 != ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result);

            } else if(total_partTime1 == '' && total_partTime2 == '' && total_partTime3 != ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result);

            } else if(total_partTime1 == '' && total_partTime2 == '' && total_partTime3 == ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result);

            } else if(total_partTime1 != '' && total_partTime2 == '' && total_partTime3 != ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result);

            } else if(total_partTime1 != '' && total_partTime2 != '' && total_partTime3 != ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result);

            } else if(total_partTime1 == '' && total_partTime2 != '' && total_partTime3 == ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result); 

            } else if(total_partTime1 != '' && total_partTime2 == '' && total_partTime3 == ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result); 

            } else if(total_partTime1 != '' && total_partTime2 != '' && total_partTime3 == ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result); 

            } else if(Total_result == '') {
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result); 
            }
    });

    // リセットボタンを押した時のイベント
    $('#reset_btn').on('click',function(){
        console.log('reset');
        if(Total_result != ''){
                $('#total').remove(); 
        }
    });
    
});