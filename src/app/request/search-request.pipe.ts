import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
  name: 'searchRequest'
})
export class SearchRequestPipe implements PipeTransform {

 //sorting requests
 transform(reqs: Request[], substr: string = ""): Request[] {
  if(substr === ""){
  return reqs;
}
  let selectedRequests: Request[] = [];
  for(let r of reqs) {
    if(
      r.status.toLowerCase().includes(substr.toLowerCase())
      || (r.description !== null && r.description.toLowerCase().includes(substr.toLowerCase()))
      ) {
        selectedRequests.push(r);
      }
    }
    return selectedRequests;
  }
}