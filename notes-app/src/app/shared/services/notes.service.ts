import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { delay, map, Observable, of } from "rxjs";
import { NotesDto } from "../core/notes.dto";
import { notesData } from "src/data";

@Injectable({
      providedIn: 'root',
})
export class NotesService {

      public getAll(
      ): Observable<NotesDto[]> {

            return of(
                  JSON.parse(
                        JSON.stringify(
                              notesData
                        )
                  )
            ).pipe(delay(500), map((res) => res.data as NotesDto[]));
      }

}