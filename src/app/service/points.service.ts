import { Injectable } from '@angular/core';

@Injectable()
export class PointsService {
    buyPoints(userId: number, value: number): number {
        
        // Mocked backend call.
        return 10;
    }
}