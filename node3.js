
exports.sol = function(num)
{
res= 1;
for(i = num ; i>0 ; i--)
{
	res*=i;
}
return res;
}

exports.get1 = function(num)
{
	flag = true;
	for(i=2;i<num;i++)
	{
		if(num%i==0)
		{
			flag = false;
			break;
		}
		else 
			flag = true;
	}
	return flag;
}

exports.get3 = function(num)
{
	flag =false;
	var res=0;
	for(i =1;i<num;i++)
	{
		if(num%i==0)
		{
			res+=i;
		}
	}
	if(res==num)
		flag =true;
	
	return flag;
		
}